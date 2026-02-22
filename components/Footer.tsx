"use client";

import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaYoutube, FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LuxuryFooter() {
  return (
    <footer className="relative bg-[#f6efe6] text-[#3a2d1f] pt-16 pb-10 mt-32 border-t border-[#e8dcc6] overflow-hidden">

      {/* subtle luxury gradient */}


      {/* LOGO + TAGLINE */}
      <motion.div 
        initial={{opacity:0, y:60}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1.2}}
        className="text-center mb-14 relative z-10"
      >
        <Image
          src="/aadi-handloom-logo.png"
          alt="AADI Handloom"
          width={220}
          height={220}
          className="mx-auto mb-5 w-[160px] sm:w-[200px] md:w-[240px] h-auto"
        />

        <p className="tracking-[0.45em] uppercase text-[11px] text-[#6d5c3d]">
          Maheshwar • Est. 1990 • Handwoven in India
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-7 mt-7 text-[18px]">
          {[ 
            {icon:<FaInstagram/>,link:"https://instagram.com/aadihandloom"},
            {icon:<FaWhatsapp/>,link:"https://wa.me/918770039639"},
            {icon:<FaYoutube/>,link:"https://www.youtube.com/@aadihandloom"},
            {icon:<FaFacebookF/>,link:"https://www.facebook.com/Shailendra.bichhave81"},
          ].map((s,i)=>(
            <a key={i} href={s.link} target="_blank"
              className="transition-all duration-300 hover:scale-110 hover:text-[#b89b5e]">
              {s.icon}
            </a>
          ))}
        </div>
      </motion.div>

      {/* LINK GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 px-6 text-[14px] relative z-10">

        {/* COLUMN */}
        {[
          {
            title:"Explore",
            links:[
              {name:"Sarees",href:"/categories?sarees"},
              {name:"Suits",href:"/categories?suits"},
              {name:"Dupatta",href:"/categories?dupatta"},
              {name:"All Products",href:"/products"},
            ]
          },
          {
            title:"Company",
            links:[
              {name:"About",href:"/about"},
              {name:"Heritage",href:"/heritage"},
              {name:"Contact",href:"/contact"},
              {name:"Blogs",href:"/blog"},
              {name:"FAQs",href:"/FAQ"},
            ]
          },
          {
            title:"Support",
            links:[
              {name:"Global Shipping"},
              {name:"Export Orders"},
              {name:"WhatsApp Support"},
              {name:"Secure Payment"},
            ]
          }
        ].map((col,idx)=>(
          <div key={idx}>
            <h4 className="uppercase tracking-[0.25em] mb-6 text-[12px] text-[#8a7a58]">
              {col.title}
            </h4>

            <ul className="space-y-3">
              {col.links.map((l,i)=>(
                <li key={i}>
                  {l.href ? (
                    <Link href={l.href}
                      className="relative inline-block transition-all duration-300 hover:text-[#b89b5e] group">
                      {l.name}

                      {/* luxury underline */}
                      <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#b89b5e] transition-all duration-400 group-hover:w-full"></span>
                    </Link>
                  ):(
                    <span className={col.title === "Support" ? "opacity-80" : "opacity-80 hover:text-[#b89b5e] transition"}>
                      {l.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* CONTACT */}
        <div>
          <h4 className="uppercase tracking-[0.25em] mb-6 text-[12px] text-[#8a7a58]">
            Contact
          </h4>

          <p className="leading-7 text-[14px] opacity-90">
            Maheshwar, Madhya Pradesh<br/>
            India<br/><br/>
            <a href="tel:+918770039639" className="hover:text-[#b89b5e] transition">+91 8770039639</a><br/>
            <a href="mailto:aadihandloom@gmail.com" className="hover:text-[#b89b5e] transition">aadihandloom@gmail.com</a>
          </p>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="w-[90%] mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#cbb27c] to-transparent my-12 opacity-60"/>

      {/* BOTTOM */}
      <div className="text-center text-[12px] tracking-[0.2em] text-[#6d5c3d] relative z-10">
        © {new Date().getFullYear()} AADI Handloom • Luxury Maheshwari Handloom House
      </div>

    </footer>
  );
}