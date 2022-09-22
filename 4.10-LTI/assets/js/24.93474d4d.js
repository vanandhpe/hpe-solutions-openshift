(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{319:function(e,t,a){"use strict";a.r(t);var s=a(13),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"deploying-rhel-8-5-os-on-the-head-nodes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploying-rhel-8-5-os-on-the-head-nodes"}},[e._v("#")]),e._v(" Deploying RHEL 8.5 OS on the head nodes")]),e._v(" "),t("p",[t("strong",[e._v("Deploying RHOCP cluster manually")]),e._v(" \nTo deploy RHEL 8.5 OS on the head nodes:")]),e._v(" "),t("ul",[t("li",[e._v("Login to iLO for head nodes server and mount RHEL 8.5 OS that needs to be deployed and configured.")])]),e._v(" "),t("p",[e._v("Copying SSH key")]),e._v(" "),t("p",[e._v("Once the OS is installed on the head nodes, copy the ssh key from the installer machine to the head nodes.")]),e._v(" "),t("p",[e._v("To copy the ssh key:")]),e._v(" "),t("ul",[t("li",[e._v("Run the following command on the head node:")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ssh-copy-id root@<head-node-ip> ")]),e._v("\n")])])]),t("p",[e._v("Setting up head nodes")]),e._v(" "),t("p",[e._v("To register the head nodes to Red Hat subscription and download and install KVM Virtualization packages:")]),e._v(" "),t("ol",[t("li",[e._v("Run the following command on the head node:")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# yum install –y virt-manager virt-install virt-viewer  libvirt  cockpit-machines ")]),e._v("\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[e._v("When all the packages are installed, start and enable all the services.")])]),e._v(" "),t("p",[t("strong",[e._v("Setting up NTP server on head nodes")])]),e._v(" "),t("p",[e._v("The NTP server is set up to enable time synchronization on all the head nodes.")]),e._v(" "),t("p",[e._v("Prerequisites:")]),e._v(" "),t("ul",[t("li",[e._v("Ensure that the Chrony suite is installed by default on Red Hat Enterprise Linux.")])]),e._v(" "),t("p",[e._v("To set up NTP server on head nodes manually:")]),e._v(" "),t("ol",[t("li",[e._v("Verify that the Chrony suite is installed on Red Hat Enterprise Linux. If it is not installed, run the following command as root:")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# yum install chrony ")]),e._v("\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Enable Chrony to start after boot.")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# systemctl enable chronyd ")]),e._v("\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[e._v("Set Chrony to act as an NTP server for a local network.")]),e._v(" "),t("li",[e._v("Edit /etc/chrony.conf configuration file and add the following line:")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# allow 192.168.1.0/24 ")]),e._v("\n")])])]),t("ol",{attrs:{start:"5"}},[t("li",[e._v("Restart Chrony NTP daemon to apply the changes:")]),e._v(" "),t("li",[e._v("Verify the NTP server configuration using manual time sync from any host located on the allowed network. Any NTP client should be able to sync with the new Chrony NTP server.")])]),e._v(" "),t("p",[e._v("For our deployment environment, the ntpdate command is used to sync with our Chrony NTP server located at 192.168.1.150 IP address:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ntpdate 192.168.1.150 ")]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);