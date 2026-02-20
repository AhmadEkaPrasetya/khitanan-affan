import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../index.css";

import bingkai from "../assets/bingkai.svg";
import container from "../assets/container_undangan_khitanan.svg";
import batik_pembatas from "../assets/batik_pembatas.svg";
import bg_batik_jawa1 from "../assets/bg_batik_jawa1.svg";
import bg_batik_jawa2 from "../assets/bg_batik_jawa2.svg";
import bg from "../assets/bg.svg";

import bunga_tunggal1 from "../assets/bunga_tunggal1.svg";
import bunga_tunggal2 from "../assets/bunga_tunggal2.svg";
import bunga_tunggal3 from "../assets/bunga_tunggal3.svg";
import bunga_tunggal4 from "../assets/bunga_tunggal4.svg";

import lentera1 from "../assets/lentera1.svg";
import lentera2 from "../assets/lentera2.svg";
import lentera3 from "../assets/lentera3.svg";
import lentera4 from "../assets/lentera4.svg";
import lentera5 from "../assets/lentera5.svg";
import lentera6 from "../assets/lentera6.svg";

import tiga_bunga1 from "../assets/tiga_bunga1.svg";
import tiga_bunga2 from "../assets/tiga_bunga2.svg";

import wayang1 from "../assets/wayang1.svg";
import wayang2 from "../assets/wayang2.svg";
import wayang3 from "../assets/wayang3.svg";
import wayang4 from "../assets/wayang4.svg";
import wayang5 from "../assets/wayang5.svg";
import wayang6 from "../assets/wayang6.svg";

import variasi_batik_1 from "../assets/variasi_batik_1.svg";
import variasi_batik_2 from "../assets/variasi_batik_2.svg";

import Rectangle_Tanggal from "../assets/Rectangle_Tanggal.svg";
import RectangleSave_The_Date from "../assets/RectangleSave_The_Date.svg";

import batik_untuk_naro_foto1 from "../assets/batik_untuk_naro_foto1.svg";
import batik_untuk_naro_foto2 from "../assets/batik_untuk_naro_foto2.svg";

import foto_batik_duduk_1 from "../assets/foto_batik_duduk_1.svg";
import foto_batik_duduk_2 from "../assets/foto_batik_duduk_2.svg";

import ellipse from "../assets/ellipse.svg";
import Stroke_Tempat from "../assets/Stroke_Tempat.svg";
import Pin from "../assets/Pin.svg";
import MapView from "./MapView";

export default function HalamanMain() {
  const [scrollY, setScrollY] = useState(0);
  const [is3d, setIs3d] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#fff5d4] relative overflow-hidden">
      <section className="relative">
        <div className="relative w-full aspect-[390/844]">
          <img
            src={bg}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <img
            src={bg_batik_jawa1}
            className="absolute inset-0 w-full h-full object-cover z-10"
          />
          <img src={bingkai} className="absolute inset-0 w-full z-40" />

          <img
            src={lentera1}
            className="absolute top-[210px] left-[197px] w-[200px] z-30 animate-[floatSlow_4s_ease-in-out_infinite]"
          />
          <img
            src={lentera2}
            className="absolute top-[215px] left-[142px] w-[200px] z-30 animate-[floatSlow_5s_ease-in-out_infinite]"
          />
          <img
            src={lentera3}
            className="absolute top-[205px] left-[165px] w-[60px] z-30 animate-[floatSlow_5s_ease-in-out_infinite]"
          />
          <img
            src={lentera4}
            className="absolute top-[205px] right-[125px] w-[60px] z-30 animate-[floatSlow_5s_ease-in-out_infinite]"
          />
          <img
            src={lentera5}
            className="absolute top-[215px] right-[142px] w-[200px] z-30 animate-[floatSlow_7s_ease-in-out_infinite]"
          />
          <img
            src={lentera6}
            className="absolute top-[210px] right-[197px] w-[200px] z-30 animate-[floatSlow_8s_ease-in-out_infinite]"
          />

          {/* CONTAINER */}
          <img
            src={container}
            className="absolute top-[80px] left-[45px] w-[300px] z-30 animate-scale-in"
          />

          <img
            src={tiga_bunga1}
            className="absolute top-[40px] left-[30px] w-[75px] z-30"
            style={{ transform: `translateY(${scrollY * 0.07}px)` }}
          />
          <img
            src={tiga_bunga2}
            className="absolute top-[185px] right-[25px] w-[75px] z-30"
            style={{ transform: `translateY(${scrollY * 0.07}px)` }}
          />

          <motion.div
            className="absolute inset-0 flex flex-col items-center pt-[100px] px-6 z-50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 1,
                },
              },
            }}
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 1 }}
              className="relative bottom-[27px] left-[78px] text-center font-oleo text-[48px] leading-[50px] mb-6 text-stroke-brown"
            >
              Undangan <br /> Khitanan
            </motion.h1>

            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.6 }}
              className="relative left-[78px] top-[5px] w-[170px] h-[220px] mb-6 mt-[40px]"
            >
              <img src={ellipse} className="w-full h-full object-contain" />
            </motion.div>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="relative left-[78px] -top-[10px] text-center font-arvo text-stroke-arvo text-[36px]"
            >
              Affan Giyatsa <br /> Nurfalah
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="relative left-[78px] -top-[35px] text-center font-arapey text-stroke-arapey text-[15px] mt-4 leading-relaxed"
            >
              Putra kedua dari : <br />
              Bpk. Farhan Afandi & Ibu Ari Kurniyati
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1 }}
            className="absolute -bottom-[29px] flex justify-center gap-[32px] z-20"
          >
            <img src={wayang1} className="w-full elegant-float" />
            <img src={wayang2} className="w-full elegant-float" />
            <img src={wayang3} className="w-full elegant-float" />
          </motion.div>

          <motion.img
            src={bunga_tunggal1}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 1 }}
            className="absolute -bottom-[14px] left-[80px] w-[90px] z-20"
          />

          <motion.img
            src={bunga_tunggal2}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 1 }}
            className="absolute -bottom-[13px] right-[78px] w-[90px] z-20"
          />
        </div>
      </section>

      <section className="relative min-h-[1400px] bg-[#f8e197] overflow-hidden">
        <img
          src={bg_batik_jawa2}
          className="absolute top-[68px] left-0 w-full h-[1400px] object-cover z-0"
        />
        <motion.img
          src={batik_pembatas}
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full z-10"
        />

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="absolute top-[68px] w-full flex justify-center gap-[32px] z-20"
        >
          <img src={wayang4} className="w-full" />
          <img src={wayang5} className="w-full" />
          <img src={wayang6} className="w-full" />
        </motion.div>

        <motion.img
          src={bunga_tunggal3}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="absolute top-[68px] left-[75px] w-[90px] z-20"
        />
        <motion.img
          src={bunga_tunggal4}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="absolute top-[68px] right-[80px] w-[90px] z-20"
        />

        <motion.img
          src={variasi_batik_1}
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            ease: [0.25, 1, 0.5, 1],
          }}
          viewport={{ once: false, amount: 0.2 }}
          className="absolute top-[85px] w-full rotate-3 scale-[1.05] z-30"
        />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1 }}
          className="absolute top-[238px] right-[40px] w-[300px] scale-y-[1.05] z-30"
        >
          <img src={RectangleSave_The_Date} className="w-full" />
          <span className="absolute top-[16px] left-[16px] inset-0 flex items-center justify-center -rotate-9 text-stroke-passions text-[60px] font-passions">
            Save The Date
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="absolute top-[395px] left-[33px] w-[320px] scale-x-[1.15] z-30 rotate-4"
        >
          <img src={Rectangle_Tanggal} className="w-full" />
          <span className="absolute top-[6px] left-[35px] inset-0 flex items-center justify-center rotate-4 text-stroke-rouge text-[64px] font-rouge">
            25-03-2026
          </span>
        </motion.div>

        <motion.img
          src={variasi_batik_2}
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: [0.25, 1, 0.5, 1],
          }}
          viewport={{ once: false, amount: 0.2 }}
          className="absolute top-[280px] w-full rotate-4 scale-[1.05] z-30"
        />

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 2.2 }}
          className="absolute top-[460px] w-full flex justify-center"
        >
          <div className="relative w-full">
            <img src={batik_untuk_naro_foto1} className="w-full" />
            <img
              src={foto_batik_duduk_1}
              className="absolute top-[130px] left-1/2 -translate-x-1/2 w-[73px] rounded-full"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.3 }}
          className="absolute top-[670px] left-1/2 -translate-x-1/2 w-[330px] max-w-md text-center"
        >
          <p className="text-stroke-arapey text-lg font-arapey leading-relaxed">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud mengundang
            Bapak/Ibu/Saudara/i untuk menghadiri acara Khitanan putra kami{" "}
            <br />
            <br />
            <span className="font-arapey text-[22px]">
              Affan Giyatsa Nurfalah
            </span>
            <br />
            <br />
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            berkenan hadir. <br />
            Atas kehadirannya kami ucapkan
            <br /> TERIMA KASIH.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 2.5 }}
          className="absolute top-[590px] w-full flex justify-center"
        >
          <div className="relative w-full">
            <img src={batik_untuk_naro_foto2} className="w-full" />
            <img
              src={foto_batik_duduk_2}
              className="absolute top-[300px] left-1/2 -translate-x-1/2 w-[75px] rounded-full"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.1 }}
          className="absolute top-[1000px] left-1/2 -translate-x-1/2 w-[330px]"
        >
          <div className="relative w-full">
            <MapView is3d={is3d} />

            <motion.img
              src={Stroke_Tempat}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute top-[19px] left-[42px] w-[250px] z-50"
            />

            <motion.p
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -top-[50px] left-[114px] text-stroke-passions text-center font-passions text-[60px] z-60"
            >
              Tempat
            </motion.p>

            <motion.img
              src={Pin}
              initial={{ y: -200, scale: 0.5, opacity: 0 }}
              whileInView={{
                y: [-200, 0, -12, 0],
                scale: [0.5, 1.1, 1],
                opacity: 1,
              }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
                delay: 0.5,
              }}
              viewport={{ once: false, amount: 0.5 }}
              className="absolute -top-[4px] right-[20px] w-[45px] z-70"
            />

            <button
              onClick={() => setIs3d((prev) => !prev)}
              style={{ padding: "10px", borderRadius: "20px 0px 20px 0px" }}
              className="absolute top-[284px] right-[2px] text-xs bg-[#f8e197] font-arapey border-none text-stroke-arapey z-80"
            >
              {`Lihat ${is3d ? "Denah" : "Sekitar"}`}
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
