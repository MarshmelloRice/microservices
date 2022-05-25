import { Publisher, Subjects, TicketCreatedEvent } from '@k8s-demo/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated;
}