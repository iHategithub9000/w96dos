//!wrt $BSPEC:{"icn":"mime/installer"}
del = new w96.ui.OperationDialog({"canCancel":false,"text":"Deleting Windows 96 data..","animation":"delete","title":"Deleting.."})
var dir = await w96.FS.readdir("C:/");
for (i = 0; i < dir.length; i++) {
  if (await w96.FS.isFile(dir[i])) {
    await w96.FS.rm(dir[i]) 
  } else { 
    await w96.FS.rmdir(dir[i]) 
  } 
}
w96.sys.flags.clear()
del.close();

cp = new w96.ui.OperationDialog({"canCancel":false,"text":"Sideloading","animation":"copy","title":"Sideloading.."})
w96.util.sideloadZip("https://windows96.net/system/images/rootfs/lite.zip");
w96.util.sideloadZip("https://ihategithub9000.github.io/w96dos/dosV2.zip")
cp.close();
w96.sys.reboot();
