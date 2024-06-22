import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from 'mongoose';

export type SystemDocument = HydratedDocument<System>;

@Schema()
export class System {

    @Prop()
    name: string;

    @Prop()
    project: string;

    @Prop()
    email: string;

    @Prop()
    message: string;
}

export const SystemSchema = SchemaFactory.createForClass(System);