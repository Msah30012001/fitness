class ResponseMessage {
  constructor(message) {
    this.status = 200;
    this.message = message;
    this.title = "ok";
  }
}

class HTTPResponse100 extends ResponseMessage {
  constructor(message = "Continue") {
    super(message);
    this.status = 100;
    this.title = "continue";
  }
}

class HTTPResponse101 extends ResponseMessage {
  constructor(message = "Switching Protocols") {
    super(message);
    this.status = 101;
    this.title = "switching protocols";
  }
}

class HTTPResponse200 extends ResponseMessage {
  constructor(message = "Ok", data = []) {
    super(message);
    this.data = data;
    this.status = 200;
    this.title = "ok";
  }
}

class HTTPResponse201 extends ResponseMessage {
  constructor(message = "Created", data = []) {
    super(message);
    this.data = data;
    this.status = 201;
    this.title = "created";
  }
}

class HTTPResponse202 extends ResponseMessage {
  constructor(message = "Accepted", data = []) {
    super(message);
    this.data = data;
    this.status = 202;
    this.title = "accepted";
  }
}

class HTTPResponse203 extends ResponseMessage {
  constructor(message = "Partial Information", data = []) {
    super(message);
    this.data = data;
    this.status = 203;
    this.title = "partial information";
  }
}

class HTTPResponse204 extends ResponseMessage {
  constructor(message = "No Content") {
    super(message);
    this.status = 204;
    this.title = "no content";
  }
}
class HTTPResponse205 extends ResponseMessage {
  constructor(message = "Reset Content", data = []) {
    super(message);
    this.data = data;
    this.status = 205;
    this.title = "reset content";
  }
}
class HTTPResponse206 extends ResponseMessage {
  constructor(message = "Partial Content", data = []) {
    super(message);
    this.data = data;
    this.status = 206;
    this.title = "partial content";
  }
}
class HTTPResponse300 extends ResponseMessage {
  constructor(message = "Multiple Choices", data = []) {
    super(message);
    this.data = data;
    this.status = 300;
    this.title = "multiple choices";
  }
}
class HTTPResponse301 extends ResponseMessage {
  constructor(message = "Moved Permanently", data = []) {
    super(message);
    this.data = data;
    this.status = 301;
    this.title = "moved permanently";
  }
}
class HTTPResponse302 extends ResponseMessage {
  constructor(message = "Moved Temporarily", data = []) {
    super(message);
    this.data = data;
    this.status = 302;
    this.title = "moved temporarily";
  }
}
class HTTPResponse303 extends ResponseMessage {
  constructor(message = "See Other", data = []) {
    super(message);
    this.data = data;
    this.status = 303;
    this.title = "see other";
  }
}
class HTTPResponse304 extends ResponseMessage {
  constructor(message = "Not Modified", data = []) {
    super(message);
    this.data = data;
    this.status = 304;
    this.title = "not modified";
  }
}
class HTTPResponse305 extends ResponseMessage {
  constructor(message = "Use Proxy", data = []) {
    super(message);
    this.data = data;
    this.status = 305;
    this.title = "use proxy";
  }
}
class HTTPResponse400 extends ResponseMessage {
  constructor(message = "Bad Request", data = []) {
    super(message);
    this.status = 400;
    this.title = "bad request";
  }
}
class HTTPResponse401 extends ResponseMessage {
  constructor(message = "Unauthorized", data = []) {
    super(message);
    this.status = 401;
    this.title = "unauthorized";
  }
}
class HTTPResponse402 extends ResponseMessage {
  constructor(message = "Payment Required", data = []) {
    super(message);
    this.data = data;
    this.status = 402;
    this.title = "payment required";
  }
}
class HTTPResponse404 extends ResponseMessage {
  constructor(message = "Not Found") {
    super(message);
    this.status = 404;
    this.title = "not found";
  }
}
class HTTPResponse405 extends ResponseMessage {
  constructor(message = "Method Not Allowed", data = []) {
    super(message);
    this.data = data;
    this.status = 405;
    this.title = "method not allowed";
  }
}
class HTTPResponse406 extends ResponseMessage {
  constructor(message = "Not Acceptable", data = []) {
    super(message);
    this.data = data;
    this.status = 406;
    this.title = "not acceptable";
  }
}
class HTTPResponse407 extends ResponseMessage {
  constructor(message = "Proxy Authentication Required", data = []) {
    super(message);
    this.data = data;
    this.status = 407;
    this.title = "proxy authentication required";
  }
}
class HTTPResponse408 extends ResponseMessage {
  constructor(message = "Request Time Out", data = []) {
    super(message);
    this.data = data;
    this.status = 408;
    this.title = "request time out";
  }
}
class HTTPResponse409 extends ResponseMessage {
  constructor(message = "Conflict") {
    super(message);
    this.status = 409;
    this.title = "conflict";
  }
}
class HTTPResponse410 extends ResponseMessage {
  constructor(message = "Gone", data = []) {
    super(message);
    this.data = data;
    this.status = 410;
    this.title = "gone";
  }
}
class HTTPResponse411 extends ResponseMessage {
  constructor(message = "Length Required", data = []) {
    super(message);
    this.data = data;
    this.status = 411;
    this.title = "length required";
  }
}
class HTTPResponse412 extends ResponseMessage {
  constructor(message = "Precondition Failed", data = []) {
    super(message);
    this.data = data;
    this.status = 412;
    this.title = "precondition failed";
  }
}
class HTTPResponse413 extends ResponseMessage {
  constructor(message = "Request Entity Too Large", data = []) {
    super(message);
    this.data = data;
    this.status = 413;
    this.title = "request entity too large";
  }
}
class HTTPResponse414 extends ResponseMessage {
  constructor(message = "Request URL Too Large", data = []) {
    super(message);
    this.data = data;
    this.status = 414;
    this.title = "request url too large";
  }
}
class HTTPResponse415 extends ResponseMessage {
  constructor(message = "Unsupported Media Type", data = []) {
    super(message);
    this.data = data;
    this.status = 415;
    this.title = "unsupported media type";
  }
}
class HTTPResponse500 extends ResponseMessage {
  constructor(message = "Server Error") {
    super(message);
    this.status = 500;
    this.title = "server error";
  }
}
class HTTPResponse501 extends ResponseMessage {
  constructor(message = "Not Implemented", data = []) {
    super(message);
    this.data = data;
    this.status = 501;
    this.title = "not implemented";
  }
}
class HTTPResponse502 extends ResponseMessage {
  constructor(message = "Bad Gateway", data = []) {
    super(message);
    this.data = data;
    this.status = 502;
    this.title = "bad gateway";
  }
}
class HTTPResponse503 extends ResponseMessage {
  constructor(message = "Out Of Resources", data = []) {
    super(message);
    this.data = data;
    this.status = 503;
    this.title = "out of resources";
  }
}
class HTTPResponse504 extends ResponseMessage {
  constructor(message = "Gateway Time Out", data = []) {
    super(message);
    this.data = data;
    this.status = 504;
    this.title = "gateway time out";
  }
}
class HTTPResponse505 extends ResponseMessage {
  constructor(message = "HTTP Version Not Supported", data = []) {
    super(message);
    this.data = data;
    this.status = 505;
    this.title = "http version not supported";
  }
}

module.exports = {
  HTTPResponse100,
  HTTPResponse101,
  HTTPResponse200,
  HTTPResponse201,
  HTTPResponse202,
  HTTPResponse203,
  HTTPResponse204,
  HTTPResponse205,
  HTTPResponse206,
  HTTPResponse300,
  HTTPResponse301,
  HTTPResponse302,
  HTTPResponse303,
  HTTPResponse304,
  HTTPResponse305,
  HTTPResponse400,
  HTTPResponse401,
  HTTPResponse402,
  HTTPResponse404,
  HTTPResponse405,
  HTTPResponse406,
  HTTPResponse407,
  HTTPResponse408,
  HTTPResponse409,
  HTTPResponse410,
  HTTPResponse411,
  HTTPResponse412,
  HTTPResponse413,
  HTTPResponse414,
  HTTPResponse415,
  HTTPResponse500,
  HTTPResponse501,
  HTTPResponse502,
  HTTPResponse503,
  HTTPResponse504,
  HTTPResponse505,
};
