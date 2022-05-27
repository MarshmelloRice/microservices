import { Publisher, Subjects, TicketUpdatedEvent } from '@k8s-demo/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
