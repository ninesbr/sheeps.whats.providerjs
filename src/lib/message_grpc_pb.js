// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var message_pb = require('./message_pb.js');

function serialize_pb_CreateRequest(arg) {
  if (!(arg instanceof message_pb.CreateRequest)) {
    throw new Error('Expected argument of type pb.CreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_CreateRequest(buffer_arg) {
  return message_pb.CreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_CreateResponse(arg) {
  if (!(arg instanceof message_pb.CreateResponse)) {
    throw new Error('Expected argument of type pb.CreateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_CreateResponse(buffer_arg) {
  return message_pb.CreateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GetRequest(arg) {
  if (!(arg instanceof message_pb.GetRequest)) {
    throw new Error('Expected argument of type pb.GetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetRequest(buffer_arg) {
  return message_pb.GetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GetResponse(arg) {
  if (!(arg instanceof message_pb.GetResponse)) {
    throw new Error('Expected argument of type pb.GetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetResponse(buffer_arg) {
  return message_pb.GetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ListContactRequest(arg) {
  if (!(arg instanceof message_pb.ListContactRequest)) {
    throw new Error('Expected argument of type pb.ListContactRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ListContactRequest(buffer_arg) {
  return message_pb.ListContactRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ListContactResponse(arg) {
  if (!(arg instanceof message_pb.ListContactResponse)) {
    throw new Error('Expected argument of type pb.ListContactResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ListContactResponse(buffer_arg) {
  return message_pb.ListContactResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ListRequest(arg) {
  if (!(arg instanceof message_pb.ListRequest)) {
    throw new Error('Expected argument of type pb.ListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ListRequest(buffer_arg) {
  return message_pb.ListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ListResponse(arg) {
  if (!(arg instanceof message_pb.ListResponse)) {
    throw new Error('Expected argument of type pb.ListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ListResponse(buffer_arg) {
  return message_pb.ListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ListenerRequest(arg) {
  if (!(arg instanceof message_pb.ListenerRequest)) {
    throw new Error('Expected argument of type pb.ListenerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ListenerRequest(buffer_arg) {
  return message_pb.ListenerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ListenerResponse(arg) {
  if (!(arg instanceof message_pb.ListenerResponse)) {
    throw new Error('Expected argument of type pb.ListenerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ListenerResponse(buffer_arg) {
  return message_pb.ListenerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_RemoveRequest(arg) {
  if (!(arg instanceof message_pb.RemoveRequest)) {
    throw new Error('Expected argument of type pb.RemoveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_RemoveRequest(buffer_arg) {
  return message_pb.RemoveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_RemoveResponse(arg) {
  if (!(arg instanceof message_pb.RemoveResponse)) {
    throw new Error('Expected argument of type pb.RemoveResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_RemoveResponse(buffer_arg) {
  return message_pb.RemoveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_StreamMessageRequest(arg) {
  if (!(arg instanceof message_pb.StreamMessageRequest)) {
    throw new Error('Expected argument of type pb.StreamMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_StreamMessageRequest(buffer_arg) {
  return message_pb.StreamMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_StreamMessageResponse(arg) {
  if (!(arg instanceof message_pb.StreamMessageResponse)) {
    throw new Error('Expected argument of type pb.StreamMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_StreamMessageResponse(buffer_arg) {
  return message_pb.StreamMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// *
// Admin service
var AdminServiceService = exports.AdminServiceService = {
  // *
// Create a new device
create: {
    path: '/pb.AdminService/Create',
    requestStream: false,
    responseStream: false,
    requestType: message_pb.CreateRequest,
    responseType: message_pb.CreateResponse,
    requestSerialize: serialize_pb_CreateRequest,
    requestDeserialize: deserialize_pb_CreateRequest,
    responseSerialize: serialize_pb_CreateResponse,
    responseDeserialize: deserialize_pb_CreateResponse,
  },
  // *
// Remove a device
remove: {
    path: '/pb.AdminService/Remove',
    requestStream: false,
    responseStream: false,
    requestType: message_pb.RemoveRequest,
    responseType: message_pb.RemoveResponse,
    requestSerialize: serialize_pb_RemoveRequest,
    requestDeserialize: deserialize_pb_RemoveRequest,
    responseSerialize: serialize_pb_RemoveResponse,
    responseDeserialize: deserialize_pb_RemoveResponse,
  },
  // *
// Get a device
get: {
    path: '/pb.AdminService/Get',
    requestStream: false,
    responseStream: false,
    requestType: message_pb.GetRequest,
    responseType: message_pb.GetResponse,
    requestSerialize: serialize_pb_GetRequest,
    requestDeserialize: deserialize_pb_GetRequest,
    responseSerialize: serialize_pb_GetResponse,
    responseDeserialize: deserialize_pb_GetResponse,
  },
  // *
// List bots
list: {
    path: '/pb.AdminService/List',
    requestStream: false,
    responseStream: false,
    requestType: message_pb.ListRequest,
    responseType: message_pb.ListResponse,
    requestSerialize: serialize_pb_ListRequest,
    requestDeserialize: deserialize_pb_ListRequest,
    responseSerialize: serialize_pb_ListResponse,
    responseDeserialize: deserialize_pb_ListResponse,
  },
  // *
// List contacts
listContact: {
    path: '/pb.AdminService/ListContact',
    requestStream: false,
    responseStream: false,
    requestType: message_pb.ListContactRequest,
    responseType: message_pb.ListContactResponse,
    requestSerialize: serialize_pb_ListContactRequest,
    requestDeserialize: deserialize_pb_ListContactRequest,
    responseSerialize: serialize_pb_ListContactResponse,
    responseDeserialize: deserialize_pb_ListContactResponse,
  },
  // *
// Listen to events
listener: {
    path: '/pb.AdminService/Listener',
    requestStream: false,
    responseStream: true,
    requestType: message_pb.ListenerRequest,
    responseType: message_pb.ListenerResponse,
    requestSerialize: serialize_pb_ListenerRequest,
    requestDeserialize: deserialize_pb_ListenerRequest,
    responseSerialize: serialize_pb_ListenerResponse,
    responseDeserialize: deserialize_pb_ListenerResponse,
  },
  // *
// Stream messages
streamMessage: {
    path: '/pb.AdminService/StreamMessage',
    requestStream: false,
    responseStream: true,
    requestType: message_pb.StreamMessageRequest,
    responseType: message_pb.StreamMessageResponse,
    requestSerialize: serialize_pb_StreamMessageRequest,
    requestDeserialize: deserialize_pb_StreamMessageRequest,
    responseSerialize: serialize_pb_StreamMessageResponse,
    responseDeserialize: deserialize_pb_StreamMessageResponse,
  },
};

exports.AdminServiceClient = grpc.makeGenericClientConstructor(AdminServiceService);
