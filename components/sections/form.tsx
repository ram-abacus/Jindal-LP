"use client";

import { useEffect, useRef } from "react";

interface HubspotFormProps {
  targetId: string;
  portalId?: string;
  formId?: string;
}

declare global {
  interface Window {
    hbspt?: any;
  }
}

export default function ContactForm({
  targetId,
  portalId = "244390138",
  formId = "ce90ce39-8add-4fe1-a4e1-e55fc4d90d50",
}: HubspotFormProps) {
  const formCreated = useRef(false);

  useEffect(() => {
    if (formCreated.current) return;

    const createForm = () => {
      if (!window.hbspt) {
        setTimeout(createForm, 100);
        return;
      }

      const targetElement = document.getElementById(targetId);

      if (targetElement?.querySelector("iframe")) {
        formCreated.current = true;
        return; // Already rendered
      }

      window.hbspt.forms.create({
        region: "na2",
        portalId,
        formId,
        target: `#${targetId}`,
      });

      formCreated.current = true;
    };

    //Load Hubspot Script only once
    const existingScript = document.getElementById("hubspot-forms-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "hubspot-forms-script";
      script.src = `https://js.hsforms.net/forms/v2.js`;
      script.async = true;
      script.onload = createForm;
      document.body.appendChild(script);
    } else {
      createForm();
    }

    return () => {
      const el = document.getElementById(targetId);
      if (el) el.innerHTML = "";
      formCreated.current = false;
    };
  }, [targetId, portalId, formId]);

  return <div id={targetId} />;
}
