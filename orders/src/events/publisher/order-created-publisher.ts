import { Publisher, OrderCreatedEvent, Subjects } from '@k8s-demo/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    readonly subject = Subjects.OrderCreated;
}