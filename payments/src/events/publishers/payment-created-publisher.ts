import { Subjects, Publisher, PaymentCreatedEvent } from "@k8s-demo/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    readonly subject = Subjects.PaymentCreated;
}