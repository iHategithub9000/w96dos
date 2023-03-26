//!wrt $BSPEC:{"icn":"mime/installer"}
alert("Uninstalling Windows96");
var dir = await w96.FS.readdir("C:/");
for (i = 0; i < dir.length; i++) {
  if (await w96.FS.isFile(dir[i])) {
    await w96.FS.rm(dir[i]) 
  } else { 
    await w96.FS.rmdir(dir[i]) 
  } 
}
alert("Sideloading https://ihategithub9000.github.io/w96dos/image.zip");
await w96.util.sideloadZip("https://ihategithub9000.github.io/w96dos/image.zip");
alert("Rebooting");
w96.sys.reboot();
