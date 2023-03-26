//!wrt $BSPEC:{"icn":"mime/installer"}
alert("Uninstalling Windows96");
await w96.FS.rmdir("C:/system");
await w96.FS.rmdir("C:/user");
alert("Sideloading https://ihategithub9000.github.io/w96dos/image.zip");
await w96.util.sideloadZip("https://ihategithub9000.github.io/w96dos/image.zip");
alert("Rebooting");
w96.sys.reboot();
