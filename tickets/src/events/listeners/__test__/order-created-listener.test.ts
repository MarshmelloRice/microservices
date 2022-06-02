import { OrderCreatedEvent, OrderStatus } from "@k8s-demo/common";
import { Message } from "node-nats-streaming";
import mongoose from "mongoose";

import { OrderCreatedListener } from "../order-created-listeners"
import { natsWrapper } from "../../../nats-wrapper"
import { Ticket } from "../../../models/ticket";

const setup = async () => {
    // create an instance of the listener
    const listener = new OrderCreatedListener(natsWrapper.client);

    // create and save a ticket
    const ticket = Ticket.build({
        title: 'movie',
        price: 99,
        userId: 'qweqwe'
    });
    await ticket.save();

    // create the fake data event object 
    const data: OrderCreatedEvent['data'] = {
        id: new mongoose.Types.ObjectId().toHexString(),
        version: 0,
        status: OrderStatus.Created,
        userId: 'qweqwe',
        expiresAt: 'asdfqwer',
        ticket: {
            id: ticket.id,
            price: ticket.price
        }
    };

    // create the fake message object 
    // @ts-ignore
    const msg: Message = {
        ack: jest.fn()
    };

    return { listener, ticket, data, msg };
};

it('sets the userId of the ticket', async () => {
    const { listener, ticket, data, msg } = await setup();

    await listener.onMessage(data, msg);

    const updatedTicket = await Ticket.findById(ticket.id);

    expect(updatedTicket!.orderId).toEqual(data.id);
});

it('acks the message', async () => {
    const { listener, ticket, data, msg } = await setup();
    await listener.onMessage(data, msg);

    expect(msg.ack).toHaveBeenCalled();
});

it('publishes a ticket updated event', async () => {
    const { listener, ticket, data, msg } = await setup();

    await listener.onMessage(data, msg);

    expect(natsWrapper.client.publish).toHaveBeenCalled();

    const ticketUpdatedData = JSON.parse((natsWrapper.client.publish as jest.Mock).mock.calls[0][1]);

    expect(data.id).toEqual(ticketUpdatedData.orderId);
});
