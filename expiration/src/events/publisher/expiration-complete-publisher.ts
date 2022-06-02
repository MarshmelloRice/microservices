import { Subjects, Publisher, ExpirationCompleteEvent } from '@k8s-demo/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    readonly subject = Subjects.ExpirationComplete;
}