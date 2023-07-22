function getAppName(firstArgument, ...rest){
    console.log(rest[2]);
}
let socialMediaApps = ["WhatsApp", "Twitter", "Lindenin", "Instagram"];
getAppName("Facebook", ...socialMediaApps);