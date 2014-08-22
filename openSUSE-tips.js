tips = new Array(67);
code = new Array(67);
tips[0] = '安装软件包';
code[0] = 'sudo zypper in <软件包名>';
tips[1] = '升级软件包';
code[1] = 'sudo zypper up <软件包名>';
tips[2] = '卸载软件包及其依赖';
code[2] = 'sudo zypper rm -u <软件包名>';
tips[3] = '不安装推荐的软件包';
code[3] = 'sudo zypper in --no-recommends <软件包名>';
tips[4] = '系统升级';
code[4] = 'sudo zypper dup (请只启用新版的 oss/non-oss/oss-update/non-oss-update 源)';
tips[5] = '在已启用的软件源中搜索软件包';
code[5] = 'sudo zypper se <软件包名>';
tips[6] = '只从固定软件源安装软件包';
code[6] = 'sudo zypper in <软件包名> -r <软件源别名>';
tips[7] = '添加软件源';
code[7] = 'sudo zypper ar -f <软件源 URL> <软件源别名>';
tips[8] = '添加 DVD/Live CD ISO 为软件源';
code[8] = 'sudo zypper ar "iso:/?iso=路径" <软件源别名>';
tips[9] = '安装软件集 (pattern)';
code[9] = 'sudo zypper in -t pattern <软件集名>';
tips[10] = '移除软件源';
code[10] = 'sudo zypper rr <软件源别名>';
tips[11] = '列出已添加的软件源 (不管启用没启用)';
code[11] = 'zypper lr';
tips[12] = 'openSUSE 下没有 gtksu 的哦！';
code[12] = '只有 gnomesu，在 libgnomesu 软件包里';
tips[13] = '刷新全部已启用的软件源';
code[13] = 'sudo zypper ref';
tips[14] = '启用软件源';
code[14] = 'sudo zypper mr -e <软件源别名>';
tips[15] = '禁用软件源';
code[15] = 'sudo zypper mr -d <软件源别名>';
tips[16] = '启用全部软件源';
code[16] = 'sudo zypper mr -ea';
tips[17] = '禁用全部软件源';
code[17] = 'sudo zypper mr -da';
tips[18] = '修改软件源优先级';
code[18] = 'sudo zypper mr -p <优先级 0~200 越小越优先> <软件源别名>';
tips[19] = '列出可用更新 (需要启用 oss-update/non-oss-update 源)';
code[19] = 'sudo zypper lu';
tips[20] = '列出你系统需要的更新补丁 (需要启用 oss-update/non-oss-update 源)';
code[20] = 'sudo zypper lp';
tips[21] = '查看提供指定功能的软件包';
code[21] = 'sudo zypper wp';
tips[22] = '列出全部可用补丁 (需要启用 oss-update/non-oss-update 源)';
code[22] = 'sudo zypper patches';
tips[23] = '列出软件包内容';
code[23] = 'rpm -ql <软件包名称>';
tips[24] = '查找某个文件属于哪个软件包';
code[24] = 'rpm -qf <文件完整路径>';
tips[25] = '不刷新软件源直接安装软件包';
code[25] = 'sudo zypper in --no-refresh <软件包名>';
tips[26] = '安装更新补丁';
code[26] = 'sudo zypper patch <补丁名 openSUSE-2013-xxx>';
tips[27] = '安装软件包源代码及其依赖';
code[27] = 'sudo zypper si <软件包名>';
tips[28] = '安装软件包的编译依赖';
code[28] = 'sudo zypper si -d <软件包名>';
tips[29] = '查看 zypper 帮助';
code[29] = 'zypper --help';
tips[30] = '查看 zypper 某个命令的帮助';
code[30] = 'zypper <命令或命令缩写> --help';
tips[31] = '单独安装某个软件包的推荐软件包';
code[31] = 'sudo zypper inr <软件包名>';
tips[32] = '降级软件包';
code[32] = 'sudo zypper in --oldpackage <软件包名>-<版本>-<架构>';
tips[33] = '自动同意软件包授权使用许可';
code[33] = 'sudo zypper in -l <软件包名>';
tips[34] = '只下载软件包，不安装';
code[34] = 'sudo zypper in -d <软件包名>';
tips[35] = '搜索推荐了指定软件包的软件包';
code[35] = 'sudo zypper se --recommends <指定软件包名>';
tips[36] = '搜索提供了指定功能的软件包';
code[36] = 'sudo zypper se --provides <功能>';
tips[37] = '显示指定补丁的完整信息';
code[37] = 'sudo zypper patch-info <补丁>';
tips[38] = '查询指定软件包的依赖';
code[38] = 'sudo zypper info --requires <软件包名>';
tips[39] = '查询指定软件包推荐的软件包';
code[39] = 'sudo zypper info --recommends <软件包名>';
tips[40] = '查询依赖指定软件包的软件包';
code[40] = 'sudo zypper se --requires <软件包名>';
tips[41] = '清除已升级软件包之前的旧配置(谨慎使用，升级会恢复 /etc 中默认配置)';
code[41] = 'sudo find /etc -name "*.rpmsave" -print -delete';
tips[42] = '编译时缺少 xxx.h 的查找方法';
code[42] = 'find /usr/include -name "xxx.h"';
tips[43] = '创建一个文件夹及其子文件夹';
code[43] = 'sudo mkdir -p <文件夹>/{<子文件夹1>,<子文件夹2>}';
tips[44] = '列出指定文件夹内容';
code[44] = 'ls <指定文件夹路径>';
tips[45] = '前往指定文件夹';
code[45] = 'cd <指定文件夹路径>';
tips[46] = '前往指定文件夹后还能回来';
code[46] = 'pushd <指定文件夹路径>, ls, popd';
tips[47] = '从 Google Public DNS 获取某网址的 IP 地址';
code[47] = 'dig +tcp +short @8.8.8.8 <指定网址>';
tips[48] = '将指定文本文件由 GBK 编码转为 UTF-8 编码';
code[48] = 'iconv -f gbk -t utf-8 <指定文本文件>';
tips[49] = '格式化U盘为 FAT32 文件系统';
code[49] = 'mkfs.vfat -F 32 -I /dev/<指定U盘>';
tips[50] = '定时关机(时间格式详见 man shutdown)';
code[50] = 'sudo shutdown -hP <指定时间>';
tips[51] = '以0.5秒为刷新间隔，监控 CPU 频率';
code[51] = 'watch -n 0.5 grep MHz /proc/cpuinfo';
tips[52] = '查看压缩包 (tar、tar.xz、tar.bz2、tar.gz) 内容';
code[52] = 'tar tvf <指定压缩包>';
tips[53] = '转换图片格式(需安装 ImageMagick)';
code[53] = 'convert image.jpg image.png';
tips[54] = '用 Vim 以只读模式打开指定文件';
code[54] = 'vim -R <指定文件>';
tips[55] = '将 PDF 文件转换成 TXT 纯文本文件，并尽量保持原排版样式';
code[55] = 'pdftotext -layout <指定 PDF 文件>';
tips[56] = '查看指定文件夹大小';
code[56] = 'du -sh <指定文件夹路径>';
tips[57] = '按照大小排列显示指定文件夹所有文件';
code[57] = 'ls -Slh <指定文件夹路径>';
tips[58] = '执行最近一条包含指定字符的历史命令';
code[58] = '!?<指定字符>';
tips[59] = '显示指定文本文件中指定字符串所在行并高亮显示该字符串';
code[59] = 'grep --color <指定字符串> <指定文本文件>';
tips[60] = '查看指定文件所属的软件包';
code[60] = 'rpm -qf <指定文件>';
tips[61] = '列出所有已安装的软件包';
code[61] = 'rpm -qa';
tips[62] = '列出指定软件包的配置文件';
code[62] = 'rpm -qc';
tips[63] = '列出指定软件包包含的所有文件';
code[63] = 'rpm -ql';
tips[64] = '查找并显示指定文本文件中不包含分号的行';
code[64] = 'grep -v ";" <指定文本文件>';
tips[65] = 'zypper 安装一个软件包的同时安装/卸载另一个软件包';
code[65] = 'sudo zypper in <软件包1> +/-<软件包2>';
tips[66] = '安装新字体后,重建字体缓存';
code[66] = 'fc-cache -fv';
tips[67] = '安装软件包';
code[67] = 'rpm -ivh <软件包名>';


index = Math.floor(Math.random() * tips.length);
document.write("&nbsp;"+tips[index]+':&nbsp;&nbsp;<code>'+code[index]+'</code>');

