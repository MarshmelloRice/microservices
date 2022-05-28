import { Subjects, Publisher, OrderCancelledEvent } from "@k8s-demo/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    readonly subject = Subjects.OrderCancelled;
}