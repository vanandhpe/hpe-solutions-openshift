(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{184:function(e,t,s){e.exports=s.p+"assets/img/figure4.080352b0.png"},185:function(e,t,s){e.exports=s.p+"assets/img/f13.da860108.png"},186:function(e,t,s){e.exports=s.p+"assets/img/figure14.d9cc4d61.png"},187:function(e,t,s){e.exports=s.p+"assets/img/f15.46d82bf4.png"},188:function(e,t,s){e.exports=s.p+"assets/img/f16.a0dd3edf.png"},189:function(e,t,s){e.exports=s.p+"assets/img/f17.f8d2fa22.png"},190:function(e,t,s){e.exports=s.p+"assets/img/f18.10819fb8.png"},191:function(e,t,s){e.exports=s.p+"assets/img/f19.7443f97b.png"},192:function(e,t,s){e.exports=s.p+"assets/img/f20.0698d36d.png"},193:function(e,t,s){e.exports=s.p+"assets/img/f21.0cbd6ea6.png"},194:function(e,t,s){e.exports=s.p+"assets/img/f22.12e184bd.png"},211:function(e,t,s){"use strict";s.r(t);var r=[function(){var e=this._self._c;return e("h1",{attrs:{id:"alletra-nimble-storage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#alletra-nimble-storage"}},[this._v("#")]),this._v(" Alletra/Nimble Storage")])},function(){var e=this._self._c;return e("h2",{attrs:{id:"hpe-csi-driver-architecture"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hpe-csi-driver-architecture"}},[this._v("#")]),this._v(" HPE CSI Driver Architecture")])},function(){var e=this._self._c;return e("p",[e("img",{attrs:{src:s(184),alt:""}})])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("Figure 10")]),this._v(": CSI Driver Architecture")])},function(){var e=this._self._c;return e("h2",{attrs:{id:"deploying-hpe-csi-driver-for-hpe-alletra-storage-on-rhocp-4-12"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploying-hpe-csi-driver-for-hpe-alletra-storage-on-rhocp-4-12"}},[this._v("#")]),this._v(" Deploying HPE CSI Driver for HPE Alletra storage on RHOCP 4.12")])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("Prerequisites:")])])},function(){var e=this._self._c;return e("li",[e("p",[this._v("RHOCP 4.12 must be successfully deployed, and console should be accessible.")])])},function(){var e=this._self._c;return e("li",[e("p",[this._v("Additional iSCSI network interfaces must be configured on physical worker nodes.()")])])},function(){var e=this._self._c;return e("li",[e("p",[this._v("Deploy scc.yaml file to enable Security Context Constraints (SCC).")])])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("Configuring iSCSI interface on worker nodes")])])},function(){var e=this._self._c;return e("ul",[e("li",[this._v("Configure iSCSI A connection as a storage interface and iSCSI B connection as an additional storage for redundancy")])])},function(){var e=this._self._c;return e("p",[e("img",{attrs:{src:s(185),alt:""}})])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("FIGURE 11")]),this._v(" iSCSI_A and iSCSI_B interface connection")])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("Creating namespace")])])},function(){var e=this,t=e._self._c;return t("ol",[t("li",[t("p",[e._v("Open Red Hat OpenShift Container Platform Console on a supported web browser.")])]),e._v(" "),t("li",[t("p",[e._v("Click Administration → Namespaces on the left pane.")])]),e._v(" "),t("li",[t("p",[e._v("Click Create Namespaces.")])]),e._v(" "),t("li",[t("p",[e._v("On the Create Namespace dialog box, enter hpe-csi.")])]),e._v(" "),t("li",[t("p",[e._v("Click Create.")])])])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("Deploying Security Context Constraints (SCC)")])])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("Prerequisites:")])])},function(){var e=this._self._c;return e("ul",[e("li",[this._v("Ensure that you can access the scc.yaml file from the following GitHub link:")])])},function(){var e=this._self._c;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("curl")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[this._v("-sL")]),this._v(" https://raw.githubusercontent.com/hpe-storage/co-deployments/master/operators/hpe-csi-operator/deploy/scc.yaml "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("\\")]),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v(">")]),this._v(" hpe-csi-scc.yaml\n")])])])},function(){var e=this._self._c;return e("ol",{attrs:{start:"2"}},[e("li",[e("p",[this._v("Edit relevant parameters such as project name or namespace in the hpe-csi-scc.yaml file.")])]),this._v(" "),e("li",[e("p",[this._v("Change my-hpe-csi-operator to the name of the project (in this case, hpe-csi) where the CSI Operator is being deployed using the following command:")])])])},function(){var e=this._self._c;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ oc new-project hpe-csi --display-name"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[this._v('"HPE CSI Driver for Kubernetes"')]),this._v("\n")])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sed")]),e._v(" -i"),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("''")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-e")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'s/my-hpe-csi-driver-operator/hpe-csi/g'")]),e._v(" hpe-csi-scc.yaml\n")])])])},function(){var e=this._self._c;return e("ol",{attrs:{start:"4"}},[e("li",[this._v("Save the file.")])])},function(){var e=this._self._c;return e("p",[e("img",{attrs:{src:s(186),alt:""}})])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("FIGURE 12:")]),this._v(" Editing hpe-cs-scc.yaml file")])},function(){var e=this._self._c;return e("ol",{attrs:{start:"5"}},[e("li",[this._v("Deploy SCC using the following command and check the output:")])])},function(){var e=this._self._c;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ oc create "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[this._v("-f")]),this._v(" hpe-csi-scc.yaml\n")])])])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("Installing and configuring HPE CSI Driver")])])},function(){var e=this._self._c;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),e("p",[this._v("HPE CSI Driver version 2.3 is used for deploying HPE Alletra Storage on the RHOCP 4.12.")])])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("Prerequisites:")])])},function(){var e=this._self._c;return e("ul",[e("li",[this._v("Create a namespace for HPE CSI Driver")]),this._v(" "),e("li",[this._v("Deploy SCC for the created namespace")])])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("Installing HPE CSI Driver Operator using Red Hat OperatorHub")])])},function(){var e=this._self._c;return e("ol",[e("li",[e("p",[this._v("Log in to the Red Hat OpenShift Container Platform Console.")])]),this._v(" "),e("li",[e("p",[this._v("Navigate to Operators → OperatorHub.")])]),this._v(" "),e("li",[e("p",[this._v("Search for HPE CSI Driver Operator from the list of operators and click HPE CSI Driver Operator.")])]),this._v(" "),e("li",[e("p",[this._v("On the HPE CSI Operator for Kubernetes page, click Install.")])])])},function(){var e=this._self._c;return e("p",[e("img",{attrs:{src:s(187),alt:""}})])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("FIGURE 13:")]),this._v(" HPE CSI Driver Operator search")])},function(){var e=this,t=e._self._c;return t("ol",{attrs:{start:"5"}},[t("li",[t("p",[e._v("On the Create Operator Subscription page, select the appropriate options:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v('Select "A specific namespace on the cluster" in the Installation Mode option.')])]),e._v(" "),t("li",[t("p",[e._v("Select the appropriate namespace (in this case, hpe-csi) in the Installed Namespace option.")])]),e._v(" "),t("li",[t("p",[e._v('Select "stable" in the Update Channel option.')])]),e._v(" "),t("li",[t("p",[e._v('Select "Automatic" in the Approval Strategy option.')])])]),e._v(" "),t("p",[t("img",{attrs:{src:s(188),alt:""}})]),e._v(" "),t("p",[t("strong",[e._v("FIGURE 14:")]),e._v(" Create Operator Subscription")]),e._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[e._v("Click Install.")])])]),e._v(" "),t("li",[t("p",[e._v("The Installed Operators page is displayed with the status of the operator.")])])])},function(){var e=this._self._c;return e("p",[e("img",{attrs:{src:s(189),alt:""}})])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("FIGURE 15:")]),this._v(" Installed Operators")])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("Creating HPE CSI Driver")])])},function(){var e=this,t=e._self._c;return t("ol",[t("li",[t("p",[e._v("Log in to the Red Hat OpenShift Container Platform Console.")])]),e._v(" "),t("li",[t("p",[e._v("Navigate to  Operators → Installed Operators on the left pane to view the installed operators.")])]),e._v(" "),t("li",[t("p",[e._v("On the Installed Operators page, select HPECSIDriver from the Project drop-down list to switch to the hpe-csi project.")])]),e._v(" "),t("li",[t("p",[e._v("On the hpe-csi project, select HPECSIDriver tab.")])]),e._v(" "),t("li",[t("p",[e._v("Click Create HPECSIDriver.")])]),e._v(" "),t("li",[t("p",[e._v("Click Create.")])])])},function(){var e=this._self._c;return e("p",[e("img",{attrs:{src:s(190),alt:""}})])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("FIGURE 16:")]),this._v(" HPE CSI Driver creation")])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("Verifying HPECSIDriver configuration")])])},function(){var e=this._self._c;return e("p",[e("img",{attrs:{src:s(191),alt:""}})])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("FIGURE 17:")]),this._v(" Deployment pods for HPECSIDriver")])},function(){var e=this._self._c;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),e("p",[this._v("The Nimble Storage CSP also supports HPE Alletra 6000.")])])},function(){var e=this._self._c;return e("ol",[e("li",[this._v("On the installer VM, check HPENodeInfo and network status of worker nodes with the following commands.")])])},function(){var e=this._self._c;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ oc get HPENodeInfo\n\n$ oc get HPENodeInfo/"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("<")]),this._v("workernode fqdn"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v(">")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[this._v("-o")]),this._v(" yaml\n")])])])},function(){var e=this._self._c;return e("p",[e("img",{attrs:{src:s(192),alt:""}})])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("FIGURE 18:")]),this._v(" HPENodeInfo on the cluster")])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("Creating HPE Alletra StorageClass")])])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("Creating Alletra Secret")])])},function(){var e=this._self._c;return e("ol",[e("li",[this._v("Add the name, Namespace, backend username, backend password and the backend IP address in the Alletra-secret.yaml file and save it to be used by the CSP.")])])},function(){var e=this._self._c;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("apiVersion: v1\n\nkind: Secret\n\nmetadata:\n\n  name: alletra-secret\n\n  namespace: hpe-csi\n\nstringData:\n\n  serviceName: alletra-csp-svc\n\n  servicePort: "),e("span",{pre:!0,attrs:{class:"token string"}},[this._v('"8080"')]),this._v("\n\n  backend: alletramgmtip      "),e("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# update alletramgmt ip")]),this._v("\n\n  username: admin\n\n  password: admin\n")])])])},function(){var e=this._self._c;return e("ol",{attrs:{start:"2"}},[e("li",[this._v("Create the Alletra-secret.yaml file with the following command:")])])},function(){var e=this._self._c;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ oc create "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[this._v("-f")]),this._v(" Alletra-secret.yaml\n")])])])},function(){var e=this._self._c;return e("ol",{attrs:{start:"3"}},[e("li",[this._v('The following output displays the status of the alletra-secret with the "hpe-csi" namespace.')])])},function(){var e=this._self._c;return e("p",[e("img",{attrs:{src:s(193),alt:""}})])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("FIGURE 19:")]),this._v(" HPE Alletra Secret status")])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("Creating StorageClass with HPE Alletra Secret")])])},function(){var e=this._self._c;return e("ol",[e("li",[this._v("Edit the following parameters in the Alletra-storageclass.yaml file:")])])},function(){var e=this._self._c;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("apiVersion: storage.k8s.io/v1\n\nkind: StorageClass\n\nmetadata:\n\n  annotations:\n\n    storageclass.kubernetes.io/is-default-class: "),e("span",{pre:!0,attrs:{class:"token string"}},[this._v('"true"')]),this._v("\n\n  name: Alletra-storageclass\n\nprovisioner: csi.hpe.com\n\nparameters:\n\n  csi.storage.k8s.io/fstype: xfs\n\n  csi.storage.k8s.io/controller-expand-secret-name: alletra-secret\n\n  csi.storage.k8s.io/controller-expand-secret-namespace: hpe-csi\n\n  csi.storage.k8s.io/controller-publish-secret-name: alletra-secret\n\n  csi.storage.k8s.io/controller-publish-secret-namespace: hpe-csi\n\n  csi.storage.k8s.io/node-publish-secret-name: alletra-secret\n\n  csi.storage.k8s.io/node-publish-secret-namespace: hpe-csi\n\n  csi.storage.k8s.io/node-stage-secret-name: alletra-secret\n\n  csi.storage.k8s.io/node-stage-secret-namespace: hpe-csi\n\n  csi.storage.k8s.io/provisioner-secret-name: alletra-secret\n\n  csi.storage.k8s.io/provisioner-secret-namespace: hpe-csi\n\n  description: "),e("span",{pre:!0,attrs:{class:"token string"}},[this._v('"Volume created by the HPE CSI Driver for Kubernetes"')]),this._v("\n\nreclaimPolicy: Delete\n\nallowVolumeExpansion: "),e("span",{pre:!0,attrs:{class:"token boolean"}},[this._v("true")]),this._v("\n")])])])},function(){var e=this._self._c;return e("ol",{attrs:{start:"2"}},[e("li",[this._v("Create the Alletra-storageclass.yml file with the following command:")])])},function(){var e=this._self._c;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ oc create "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[this._v("-f")]),this._v(" Alletra-storageclass.yml\n")])])])},function(){var e=this._self._c;return e("ol",{attrs:{start:"3"}},[e("li",[this._v("Verify the name of the storage class (in this case, Alletra-storageclass).")])])},function(){var e=this._self._c;return e("p",[e("img",{attrs:{src:s(194),alt:""}})])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("FIGURE 20:")]),this._v(" HPE Alletra StorageClass status")])}],a=s(0),n=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),t("p",[e._v("A diagramatic representation of the HPE CSI driver architecture is illustrated in the figure 10.")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),t("p",[e._v("The OpenShift Container Platform 4.12 cluster comprises the master and worker nodes (physical and virtual) with CoreOS deployed as the operating system. The iSCSI interface configured on the host nodes establishes the connection with the HPE Alletra array to the cluster. Upon successful deployment of HPE CSI Driver, the CSI controller, CSI Driver, and 3PAR CSP  and Nimble CSP gets deployed which communicates with the HPE Alletra array via REST APIs. The associated features on Storage Class such as CSI Provisioner, CSI Attacher, and others are configured on the Storage Class.")]),e._v(" "),e._m(4),e._v(" "),t("p",[e._v("This section describes how to deploy HPE CSI Driver for HPE Alletra storage on an existing RHOCP 4.12.")]),e._v(" "),e._m(5),e._v(" "),t("p",[e._v("Before configuring the HPE CSI Driver, the following prerequisites must be met:")]),e._v(" "),t("ol",[e._m(6),e._v(" "),t("li",[t("p",[e._v("iSCSI interface must be configured on the HPE Alletra Storage array. For more information, see the "),t("a",{attrs:{href:"https://hpe.sharepoint.com/:f:/r/sites/msteams_ca9c1f/Shared%20Documents/Storage/Alletra/6K%20%26%205K/MRA_Alletra6K_Release?csf=1&web=1&e=i211EA",target:"_blank",rel:"noopener noreferrer"}},[e._v("Infrastructure Master Reference Architecture based on HPE Alletra 6000"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),e._m(7),e._v(" "),e._m(8)]),e._v(" "),e._m(9),e._v(" "),t("p",[e._v("The RHOCP 4.12 cluster comprises the master and physical worker nodes with RHEL 8.6 deployed as the operating system. The iSCSI interface is configured on the host nodes to establish the connection with the HPE Alletra array to the cluster. Apart from the host nodes, additional iSCSI interface needs to be configured on all the worker (physical and virtual) nodes for establishing the connection between the RHOCP cluster and HPE Alletra arrays.")]),e._v(" "),t("p",[e._v("To configure iSCSI interface on physical RHEL worker nodes:")]),e._v(" "),e._m(10),e._v(" "),t("p",[e._v("For example, the iSCSI_A and iSCSI_B interface connection is configured on worker1 node, as shown in Figure 11.")]),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),t("p",[e._v("To create a namespace, in this case, hpe-csi:")]),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),t("p",[e._v("The HPE CSI Driver needs to run in the privileged mode to get access to the host ports, host network, and to mount the host path volume. Before deploying HPE CSI Driver operator on RHOCP cluster, deploy SCC to allow HPE CSI Driver to run with these privileges.")]),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),t("p",[t("a",{attrs:{href:"https://raw.githubusercontent.com/hpe-storage/co-deployments/master/operators/hpe-csi-operator/deploy/scc.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://raw.githubusercontent.com/hpe-storage/co-deployments/master/operators/hpe-csi-operator/deploy/scc.yaml"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("To deploy SCC:")]),e._v(" "),t("ol",[t("li",[e._v("On the installer VM, download scc.yaml file from the "),t("a",{attrs:{href:"https://raw.githubusercontent.com/hpe-storage/co-deployments/master/operators/hpe-csi-operator/deploy/scc.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),t("OutboundLink")],1),e._v(" link using the following command:")])]),e._v(" "),e._m(18),e._m(19),e._v(" "),e._m(20),e._m(21),e._m(22),e._v(" "),t("p",[e._v("The following figure illustrates the parameter that needs to be edited (project name) where the HPE CSI Driver operator is deployed:")]),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),e._m(26),t("p",[e._v("The following output is displayed:")]),e._v(" "),t("p",[e._v("securitycontextconstraints.security.openshift.io/hpe-csi-scc created")]),e._v(" "),e._m(27),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),t("p",[e._v("Before installing the HPE CSI Driver from the Red Hat OpenShift Container Platform Console:")]),e._v(" "),e._m(30),e._v(" "),e._m(31),e._v(" "),t("p",[e._v("To install HPE CSI Driver Operator from the Red Hat OperatorHub:")]),e._v(" "),e._m(32),e._v(" "),e._m(33),e._v(" "),e._m(34),e._v(" "),e._m(35),e._v(" "),e._m(36),e._v(" "),e._m(37),e._v(" "),e._m(38),e._v(" "),t("p",[e._v("The HPE CSI Driver is a multi-vendor and multi-backend driver where each implementation has a Container Storage Provider (CSP). The HPE CSI Driver for Kubernetes uses CSP to perform data management operations on storage resources such as searching for a logical unit number (lun) and so on. The HPE CSI Driver allows any vendor or project to develop its own CSP using the "),t("a",{attrs:{href:"https://developer.hpe.com/api/hpe-nimble-csp/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSP specification"),t("OutboundLink")],1),e._v(". It enables the third parties to integrate their storage solution into Kubernetes and takes care of all the intricacies.")]),e._v(" "),t("p",[e._v("To create the HPE CSI Driver:")]),e._v(" "),e._m(39),e._v(" "),e._m(40),e._v(" "),e._m(41),e._v(" "),e._m(42),e._v(" "),t("p",[e._v("After the HPECSIDriver is deployed, the deployment pods such as hpe-csi-controller, hpe-csi-driver, primera3par-csp, and Nimble-csp are displayed on the Pods page.")]),e._v(" "),e._m(43),e._v(" "),e._m(44),e._v(" "),e._m(45),e._v(" "),t("p",[e._v("To verify the HPE CSI node information:")]),e._v(" "),e._m(46),e._v(" "),e._m(47),t("p",[e._v("The following output is displayed:")]),e._v(" "),e._m(48),e._v(" "),e._m(49),e._v(" "),e._m(50),e._v(" "),t("p",[e._v("After HPE CSI Driver is deployed, two additional objects, Secret and StorageClass, must be created to initiate the provisioning of persistent storage.")]),e._v(" "),e._m(51),e._v(" "),t("p",[e._v("To create a new Secret via CLI that will be used with HPE Alletra:")]),e._v(" "),e._m(52),e._v(" "),t("p",[e._v("The following details are provided in the Alletra-secret.yaml file:")]),e._v(" "),e._m(53),e._m(54),e._v(" "),e._m(55),e._m(56),e._v(" "),e._m(57),e._v(" "),e._m(58),e._v(" "),e._m(59),e._v(" "),t("p",[e._v("This section describes how to create a new StorageClass using the existing Alletra-secret and the necessary StorageClass parameters.")]),e._v(" "),t("p",[e._v("To create a new StorageClass using the Alletra-secret:")]),e._v(" "),e._m(60),e._v(" "),e._m(61),e._m(62),e._v(" "),e._m(63),e._m(64),e._v(" "),e._m(65),e._v(" "),e._m(66)])}),r,!1,null,null,null);t.default=n.exports}}]);