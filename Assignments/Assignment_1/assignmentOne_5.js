function logApps(param1, ...rest){
    console.log(rest[2]);
}
let socialMediaApps1 = ["Twiiter", "LinkedIn", "Instagram"];
let socialMediaApps2 = ["Whatsapp", ...socialMediaApps1];
logApps(...socialMediaApps2,"Facebook");
//Instagram