process.platform = "Grd Me";
process.stderr = {
  write: function(t){
    console.log(t);
  }
}
var axolotl = require("axolotl");
var store = {
  identityKeyPair: {
    public: new ArrayBuffer(),
    private: new ArrayBuffer(),
  },
  registrationId: 0,
  getLocalIdentityKeyPair: function() {
    return identityKeyPair;
  },
  getLocalRegistrationId: function() {
    return this.registrationId;
  },
  getLocalSignedPreKeyPair: function(signedPreKeyId){
    return identityKeyPair;
  },
  getLocalPreKeyPair: function(preKeyId){
    return identityKeyPair;
  },
}
var axol = axolotl(store);
console.log(axol.generateIdentityKeyPair());
