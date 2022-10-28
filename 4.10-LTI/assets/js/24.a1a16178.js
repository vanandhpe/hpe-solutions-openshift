(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{319:function(e,a,t){"use strict";t.r(a);var s=t(13),n=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"deploying-rhocp-cluster-manually"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploying-rhocp-cluster-manually"}},[e._v("#")]),e._v(" Deploying RHOCP cluster manually")]),e._v(" "),a("p",[e._v("Deploying RHEL 8.6 OS on the head nodes")]),e._v(" "),a("p",[e._v("To deploy RHEL 8.6 OS on the head nodes:")]),e._v(" "),a("ul",[a("li",[e._v("Login to iLO for head nodes server and mount RHEL 8.6 OS that needs to be deployed and configured.")])]),e._v(" "),a("p",[e._v("Copying SSH key")]),e._v(" "),a("p",[e._v("Once the OS is installed on the head nodes, copy the ssh key from the installer machine to the head nodes.")]),e._v(" "),a("ul",[a("li",[e._v("To copy the ssh key,  run the following command on the head node:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ ssh-copy-id root@"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("head-node-ip"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("p",[e._v("Setting up head nodes")]),e._v(" "),a("p",[e._v("Complete the following steps to register the head nodes to a Red Hat subscription and download and install KVM Virtualization packages.")]),e._v(" "),a("ol",[a("li",[e._v("Run the following command on the head node:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ yum "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" –y virt-manager virt-install virt-viewer  libvirt  cockpit-machines\n")])])]),a("ol",[a("li",[e._v("When all the packages are installed, start and enable all the services.")])]),e._v(" "),a("p",[a("strong",[e._v("Setting up NTP server on head nodes")])]),e._v(" "),a("p",[e._v("The NTP server is set up to enable time synchronization on all the head nodes.")]),e._v(" "),a("p",[e._v("Prerequisites:")]),e._v(" "),a("ul",[a("li",[e._v("Ensure that the Chrony suite is installed by default on Red Hat Enterprise Linux.")])]),e._v(" "),a("p",[e._v("To set up NTP server on head nodes manually:")]),e._v(" "),a("ol",[a("li",[e._v("Verify that the Chrony suite is installed on Red Hat Enterprise Linux. If it is not installed, run the following command as root:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ yum "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" chrony\n")])])]),a("ol",[a("li",[e._v("Enable Chrony to start after boot.")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("enable")]),e._v(" chronyd\n")])])]),a("ol",[a("li",[a("p",[e._v("Set Chrony to act as an NTP server for a local network.")])]),e._v(" "),a("li",[a("p",[e._v("Edit /etc/chrony.conf configuration file and add the following line:")])])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ allow "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".1.0/24\n")])])]),a("ol",[a("li",[a("p",[e._v("Restart Chrony NTP daemon to apply the changes:")])]),e._v(" "),a("li",[a("p",[e._v("Verify the NTP server configuration using manual time sync from any host located on the allowed network. Any NTP client should be able to sync with the new Chrony NTP server.")])])]),e._v(" "),a("p",[e._v("For our deployment environment, the ntpdate command is used to sync with our Chrony NTP server located at 192.168.1.150 IP address:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ ntpdate "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".1.150\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);