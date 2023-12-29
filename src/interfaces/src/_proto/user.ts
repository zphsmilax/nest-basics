/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "main_service";

export interface Empty {
}

export interface HealthMessage {
  status: boolean;
  message: string;
}

function createBaseEmpty(): Empty {
  return {};
}

export const Empty = {
  encode(_: Empty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Empty {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmpty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): Empty {
    return {};
  },

  toJSON(_: Empty): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Empty>, I>>(base?: I): Empty {
    return Empty.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Empty>, I>>(_: I): Empty {
    const message = createBaseEmpty();
    return message;
  },
};

function createBaseHealthMessage(): HealthMessage {
  return { status: false, message: "" };
}

export const HealthMessage = {
  encode(message: HealthMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status === true) {
      writer.uint32(8).bool(message.status);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HealthMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHealthMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HealthMessage {
    return {
      status: isSet(object.status) ? globalThis.Boolean(object.status) : false,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
    };
  },

  toJSON(message: HealthMessage): unknown {
    const obj: any = {};
    if (message.status === true) {
      obj.status = message.status;
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HealthMessage>, I>>(base?: I): HealthMessage {
    return HealthMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HealthMessage>, I>>(object: I): HealthMessage {
    const message = createBaseHealthMessage();
    message.status = object.status ?? false;
    message.message = object.message ?? "";
    return message;
  },
};

export interface hello {
  Get_Message(request: Empty): Promise<HealthMessage>;
}

export const helloServiceName = "main_service.hello";
export class helloClientImpl implements hello {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || helloServiceName;
    this.rpc = rpc;
    this.Get_Message = this.Get_Message.bind(this);
  }
  Get_Message(request: Empty): Promise<HealthMessage> {
    const data = Empty.encode(request).finish();
    const promise = this.rpc.request(this.service, "Get_Message", data);
    return promise.then((data) => HealthMessage.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
