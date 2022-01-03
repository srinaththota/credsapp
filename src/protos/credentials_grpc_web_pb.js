/**
 * @fileoverview gRPC-Web generated client stub for io.iohk.test.protos
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.io = {};
proto.io.iohk = {};
proto.io.iohk.test = {};
proto.io.iohk.test.protos = require('./credentials_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.io.iohk.test.protos.CredentialsServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.io.iohk.test.protos.CredentialsServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.iohk.test.protos.GetCredentialsRequest,
 *   !proto.io.iohk.test.protos.GetCredentialsResponse>}
 */
const methodDescriptor_CredentialsService_GetCredentials = new grpc.web.MethodDescriptor(
  '/io.iohk.test.protos.CredentialsService/GetCredentials',
  grpc.web.MethodType.UNARY,
  proto.io.iohk.test.protos.GetCredentialsRequest,
  proto.io.iohk.test.protos.GetCredentialsResponse,
  /**
   * @param {!proto.io.iohk.test.protos.GetCredentialsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.iohk.test.protos.GetCredentialsResponse.deserializeBinary
);


/**
 * @param {!proto.io.iohk.test.protos.GetCredentialsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.iohk.test.protos.GetCredentialsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.iohk.test.protos.GetCredentialsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.iohk.test.protos.CredentialsServiceClient.prototype.getCredentials =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.iohk.test.protos.CredentialsService/GetCredentials',
      request,
      metadata || {},
      methodDescriptor_CredentialsService_GetCredentials,
      callback);
};


/**
 * @param {!proto.io.iohk.test.protos.GetCredentialsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.iohk.test.protos.GetCredentialsResponse>}
 *     Promise that resolves to the response
 */
proto.io.iohk.test.protos.CredentialsServicePromiseClient.prototype.getCredentials =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.iohk.test.protos.CredentialsService/GetCredentials',
      request,
      metadata || {},
      methodDescriptor_CredentialsService_GetCredentials);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.iohk.test.protos.GetCredentialsRequest,
 *   !proto.io.iohk.test.protos.GetUsersResponse>}
 */
const methodDescriptor_CredentialsService_getUsers = new grpc.web.MethodDescriptor(
  '/io.iohk.test.protos.CredentialsService/getUsers',
  grpc.web.MethodType.UNARY,
  proto.io.iohk.test.protos.GetCredentialsRequest,
  proto.io.iohk.test.protos.GetUsersResponse,
  /**
   * @param {!proto.io.iohk.test.protos.GetCredentialsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.iohk.test.protos.GetUsersResponse.deserializeBinary
);


/**
 * @param {!proto.io.iohk.test.protos.GetCredentialsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.iohk.test.protos.GetUsersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.iohk.test.protos.GetUsersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.iohk.test.protos.CredentialsServiceClient.prototype.getUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.iohk.test.protos.CredentialsService/getUsers',
      request,
      metadata || {},
      methodDescriptor_CredentialsService_getUsers,
      callback);
};


/**
 * @param {!proto.io.iohk.test.protos.GetCredentialsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.iohk.test.protos.GetUsersResponse>}
 *     Promise that resolves to the response
 */
proto.io.iohk.test.protos.CredentialsServicePromiseClient.prototype.getUsers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.iohk.test.protos.CredentialsService/getUsers',
      request,
      metadata || {},
      methodDescriptor_CredentialsService_getUsers);
};


module.exports = proto.io.iohk.test.protos;

