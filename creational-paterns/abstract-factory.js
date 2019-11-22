
class Database {
  getDescription() {
    console.log('I am a DB')
  }
}

class ClientCode {
  getDescription() {
    console.log('I am a Client code in browser')
  }
}
class BackendDev {
  getDescription() {
    console.log('I can fix  DB')
  }
}

class FrontendDev {
  getDescription() {
    console.log('I can fix your client code')
  }
}

class BackendFactory {
  getIssue() {
    return new Database()
  }

  callDev() {
    return new BackendDev()
  }
}

class FrontendFactory {
  getIssue() {
    return new ClientCode()
  }

  callDev() {
    return new FrontendDev()
  }
}

let clientSideCodeFactory = new FrontendFactory();

let issue = clientSideCodeFactory.getIssue()
let expert = clientSideCodeFactory.callDev()

issue.getDescription();
expert.getDescription();
