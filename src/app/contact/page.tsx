'use client';

import {ContactPage} from "../../components/sections/contact/ContactPage";
import { useTransitionStore } from '../../components/store/transitionStore';
import { useEffect, useState } from 'react';


export default function Contact() {
  const show = useTransitionStore((s) => s.show);
  const hide = useTransitionStore((s) => s.hide);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    show("CONTACT");

    const timeout = setTimeout(() => {
      hide();
      setShowContent(true);
    }, 1200);

    return () => clearTimeout(timeout);
  }, [show, hide]);

  return (
    <div className="relative bg-white min-h-screen">
      {showContent && (
        <ContactPage />
      )}
    </div>
  );
}
