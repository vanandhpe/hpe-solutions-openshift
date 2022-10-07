(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{305:function(e,t,n){"use strict";n.r(t);var o=n(13),r=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[t("strong",[e._v("INTRODUCTION")])]),e._v(" "),t("p",[e._v("Red Hat® OpenShift® Container Platform (RHOCP) is a consistent hybrid cloud foundation for building and scaling containerized applications. It delivers a single, consistent Kubernetes platform anywhere that Red Hat® Enterprise Linux® (RHEL) operating system runs. Container platforms built on Kubernetes deliver a cloud-like experience across all the locations where you deploy it, whether it is a private or public cloud, on-premises, or at the edge.")]),e._v(" "),t("p",[e._v("This document describes the deployment of a high available and secure Red Hat® OpenShift® Container Platform 4.10 on HPE ProLiant 365 Gen10 Plus servers. It is intended to be used in conjunction with Ansible® Playbook and python scripts found at "),t("a",{attrs:{href:"https://github.com/HewlettPackard/hpe-solutions-openshift.git",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/HewlettPackard/hpe-solutions-openshift.git"),t("OutboundLink")],1),e._v(". This document provides implementation guidelines for RHOCP 4.10. For more information, see the "),t("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.10/welcome/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Red Hat OpenShift Container Platform 4.10 documentation"),t("OutboundLink")],1),e._v(". Hewlett Packard Enterprise strives to make regular updates to this solution with the goal of validating against the latest available version of RHOCP. As a result, the references in the document will generally refer to RHOCP 4.10 and will mention specific sub-versions in strategic locations to note the version that was tested.")]),e._v(" "),t("p",[e._v("The RHOCP 4.10 deployment on HPE ProLiant 365 Gen10 Plus servers includes the following:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("RHEL 8.6 is installed on the ProLiant 365 Gen10 Plus servers")])]),e._v(" "),t("li",[t("p",[e._v("Three RHOCP master nodes run as virtual machines on Kernel-based Virtual Machine (KVM) nodes and three HPE ProLiant 365 Gen10 Plus servers are used for the worker nodes (out of which one node acts as both, the installer and the worker node)")])]),e._v(" "),t("li",[t("p",[e._v("HPE Container Storage Interface (CSI) Driver with HPE Alletra storage is deployed on the existing RHOCP 4.10 solution offering")])])]),e._v(" "),t("p",[t("strong",[e._v("NOTE")])]),e._v(" "),t("p",[e._v("Hewlett Packard Enterprise plans to update this document over time with enhancements to deployment methodologies as well as new software versions, features, and functions. Check for the latest document at "),t("a",{attrs:{href:"https://hewlettpackard.github.io/hpe-solutions-openshift/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hewlettpackard.github.io/hpe-solutions-openshift/"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);