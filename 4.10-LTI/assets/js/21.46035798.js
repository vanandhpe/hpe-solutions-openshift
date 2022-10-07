(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{311:function(e,s,a){"use strict";a.r(s);var o=a(13),t=Object(o.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"adding-rhel-8-6-worker-nodes-to-rhocp-cluster-using-ansible-playbooks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-rhel-8-6-worker-nodes-to-rhocp-cluster-using-ansible-playbooks"}},[e._v("#")]),e._v(" Adding RHEL 8.6 worker nodes to RHOCP cluster using Ansible playbooks")]),e._v(" "),s("p",[e._v("The Lite Touch Installation (LTI) package includes Ansible playbooks with scripts to add the RHEL 8.6 worker nodes to the RHOCP cluster. You can use one of the following two methods to add the RHEL 8.6 worker nodes:")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Run a consolidated playbook:")]),e._v(" This method includes a single playbook, site.yml, that contains a script to perform all the tasks for adding the RHEL 8.6 worker nodes to the existing RHOCP cluster. To run LTI using a consolidated playbook:")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ ansible-playbook "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" inventory/hosts site.yaml\n")])])]),s("ul",[s("li",[s("strong",[e._v("Run individual playbooks:")]),e._v(" This method includes multiple playbooks with scripts that enable you to deploy specific tasks for adding the RHEL 8.6 worker nodes to the existing RHOCP cluster. The playbooks in this method must be executed in a specific sequence to add the worker nodes. The following table includes the purpose of each playbook required for the deployment:")])]),e._v(" "),s("p",[s("strong",[e._v("TABLE")]),e._v(" "),s("strong",[e._v("8")]),e._v(" Add RHEL 8.6 nodes using Ansible playbooks")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Playbook")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("rhel8_os_deployment.yml")]),e._v(" "),s("td",[e._v("This playbook contains the scripts to deploy RHEL 8.6 OS on worker nodes.")])]),e._v(" "),s("tr",[s("td",[e._v("copy_ssh.yml")]),e._v(" "),s("td",[e._v("This playbook contains the script to copy the SSH public key to the RHEL 8.6 worker nodes.")])]),e._v(" "),s("tr",[s("td",[e._v("prepare_worker_nodes.yml")]),e._v(" "),s("td",[e._v("This playbook contains the script to prepare nodes for the RHEL 8.6 worker nodes.")])]),e._v(" "),s("tr",[s("td",[e._v("ntp.yml")]),e._v(" "),s("td",[e._v("This playbook contains the script to create NTP setup to enable time synchronization on the worker nodes.")])]),e._v(" "),s("tr",[s("td",[e._v("openshift-ansible/playbooks/scaleup.yml")]),e._v(" "),s("td",[e._v("This playbook contains the script to add worker nodes to the RHOCP cluster. This playbook queries the master, generates and distributes new certificates for the new hosts, and then runs the configuration playbooks on the new hosts.")])])])]),e._v(" "),s("p",[e._v("To run individual playbooks:")]),e._v(" "),s("ul",[s("li",[e._v("Do one of the following:")]),e._v(" "),s("li",[e._v("Edit site.yaml file and add a comment for all the playbooks except the ones that you want to execute.")])]),e._v(" "),s("p",[e._v("For example, add the following comments in the site.yaml file to deploy RHEL 8.6 OS on the worker nodes:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("import_playbook: playbooks/rhel8_os_deployment.yml\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# import_playbook: playbooks/copy_ssh.yml")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# import_playbook: playbooks/prepare_worker_nodes.yml")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# import_playbook: playbooks/ntp.yml")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# import_playbook: openshift-ansible/playbooks/scaleup.yml")]),e._v("\n")])])]),s("p",[e._v("OR")]),e._v(" "),s("ul",[s("li",[e._v("Run the individual YAML files using the following command:")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ ansible-playbook "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("yaml_filename"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(".yml\n")])])]),s("p",[e._v("For example, run the following YAML file to deploy RHEL 8.6 OS on the worker nodes:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ ansible-playbook "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/rhel8_os_deployment.yml\n")])])]),s("p",[e._v("For more information on executing individual playbooks, see the consecutive sections.")]),e._v(" "),s("p",[s("strong",[e._v("Adding RHEL 8.6 worker nodes")])]),e._v(" "),s("p",[e._v("This section describes how to add RHEL 8.6 worker nodes to an existing RHOCP cluster.")]),e._v(" "),s("p",[e._v("To add RHEL 8.6 worker nodes to the RHOCP cluster:")]),e._v(" "),s("ol",[s("li",[e._v("Login to the Installer VM.")])]),e._v(" "),s("p",[e._v("This installer VM was created as a KVM VM on one of the head nodes using the rhel7_installerVM.yml playbook. For more information, see the "),s("a",{attrs:{href:"bookmark://_Creating_RHEL_7"}},[e._v("Creating RHEL 7 installer machine")]),e._v(" section.")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Navigate to the /opt/NGS-OpenShift/worker_nodes/ directory, edit the input.yaml and inventory/hosts files, and enter the values as per your setup.")])]),e._v(" "),s("li",[s("p",[e._v("Copy RHEL 8.6 DVD ISO to the /usr/share/nginx/html/ directory.")])]),e._v(" "),s("li",[s("p",[e._v("Navigate to the /opt/ hpe-solutions-openshift/DL-LTI-Openshift/worker_nodes directory and run the following command:")])])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v(" setup.sh\n")])])]),s("ol",[s("li",[e._v("Add the worker nodes to the cluster using one of the following methods:")])]),e._v(" "),s("ul",[s("li",[e._v("Run the following sequence of playbooks:")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v(" ansible-playbook "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/rhel8_os_deployment.yml\n\n ansible-playbook "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/copy_ssh.yml\n\n ansible-playbook "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/prepare_worker_nodes.yml\n\n ansible-playbook "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/ntp.yml\n\n ansible-playbook "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/scaleup.yml\n\n")])])]),s("p",[e._v("OR")]),e._v(" "),s("p",[e._v("If you want to deploy the entire solution to add the worker nodes to the cluster, execute the following playbook:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ ansible-playbook "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" inventory/hosts site.yaml\n")])])]),s("ol",[s("li",[e._v("Once all the playbooks are executed successfully, check the status of the node using the following command:")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ oc get nodes\n")])])]),s("p",[e._v("The following output is displayed:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("NAMESTATUSROLESAGEVERSION\n\nmaster0.ocp.ngs.localReadymaster,worker13dv1.23.3+e419edf\n\nmaster1.ocp.ngs.localReadymaster,worker13dv1.23.3+e419edf\n\nmaster2.ocp.ngs.localReadymaster,worker13dv1.23.3+e419edf\n\nworker1.ocp.ngs.localReadyworker23hv1.23.5+3afdacb\n\nworker2.ocp.ngs.localReadyworker23hv1.23.5+3afdacb\n\nworker3.ocp.ngs.localReadyworker23hv1.23.5+3afdacb\n")])])]),s("ol",[s("li",[s("p",[e._v('Once the worker nodes are added to the cluster, set the "mastersSchedulable" parameter as false to ensure that the master nodes are not used to schedule pods.')])]),e._v(" "),s("li",[s("p",[e._v("Edit the schedulers.config.openshift.io resource.")])])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ oc edit schedulers.config.openshift.io cluster\n")])])]),s("ol",[s("li",[e._v("Configure the mastersSchedulable field.")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("apiVersion: config.openshift.io/v1\n\nkind: Scheduler\n\nmetadata:\n\ncreationTimestamp: "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"2019-09-10T03:04:05Z"')]),e._v("\n\ngeneration: "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n\nname: cluster\n\nresourceVersion: "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"433"')]),e._v("\n\nselfLink: /apis/config.openshift.io/v1/schedulers/cluster\n\nuid: a636d30a-d377-11e9-88d4-0a60097bee62\n\nspec:\n\nmastersSchedulable: "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n\npolicy:\n\nname: "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('""')]),e._v("\n\nstatus: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[s("strong",[e._v("NOTE")])]),e._v(" "),s("p",[e._v("Set the mastersSchedulable to true to allow Control Plane nodes to be schedulable or false to disallow Control Plane nodes to be schedulable.")]),e._v(" "),s("ol",[s("li",[e._v("Save the file to apply the changes.")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ oc get nodes\n")])])]),s("ul",[s("li",[e._v("The following output is displayed:")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("NAMESTATUSROLESAGEVERSION\n\nmaster0.ocp.ngs.localReadymaster13dv1.23.3+e419edf\n\nmaster1.ocp.ngs.localReadymaster13dv1.23.3+e419edf\n\nmaster2.ocp.ngs.localReadymaster13dv1.23.3+e419edf\n\nworker1.ocp.ngs.localReadyworker23hv1.23.5+3afdacb\n\nworker2.ocp.ngs.localReadyworker23hv1.23.5+3afdacb\n\nworker3.ocp.ngs.localReadyworker23hv1.23.5+3afdacb\n")])])]),s("p",[s("strong",[e._v("NOTE")])]),e._v(" "),s("p",[e._v("To add more worker nodes, update worker details in haproxy and binddns on head nodes and then add RHEL 8.6 worker nodes to the RHOCP cluster. For more information on adding worker nodes, see the Adding RHEL 8.6 worker nodes section.")])])}),[],!1,null,null,null);s.default=t.exports}}]);