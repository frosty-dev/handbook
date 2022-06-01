/* eslint-disable @typescript-eslint/no-shadow */
import chemistry from "@/assets/images/tab-icons/chemistry.svg";
import medicine from "@/assets/images/tab-icons/medicine.svg";
import plumbing from "@/assets/images/tab-icons/plumbing.svg";
import grenade from "@/assets/images/tab-icons/grenade.svg";
import genetics from "@/assets/images/tab-icons/genetics.svg";
import virus from "@/assets/images/tab-icons/virus.svg";
import surgery from "@/assets/images/tab-icons/surgery.svg";
import trauma from "@/assets/images/tab-icons/trauma.svg";
import wound from "@/assets/images/tab-icons/wound.svg";
import ghetto from "@/assets/images/tab-icons/ghetto.svg";
import construction from "@/assets/images/tab-icons/construction.svg";
import machines from "@/assets/images/tab-icons/machines.svg";
import power from "@/assets/images/tab-icons/power.svg";
import solar from "@/assets/images/tab-icons/solar.svg";
import supermatter from "@/assets/images/tab-icons/supermatter.svg";
import shield from "@/assets/images/tab-icons/shield.svg";
import turbine from "@/assets/images/tab-icons/turbine.svg";
import atmos from "@/assets/images/tab-icons/atmos.svg";
import tcomm from "@/assets/images/tab-icons/tcomm.svg";
import rnd from "@/assets/images/tab-icons/rnd.svg";
import toxins from "@/assets/images/tab-icons/toxins.svg";
import xeno from "@/assets/images/tab-icons/xeno.svg";
import nanites from "@/assets/images/tab-icons/nanites.svg";
import rules from "@/assets/images/tab-icons/rules.svg";
import aimod from "@/assets/images/tab-icons/aimod.svg";
import tips from "@/assets/images/tab-icons/tips.svg";
import critter from "@/assets/images/tab-icons/critter.svg";
import races from "@/assets/images/tab-icons/races.svg";
import food from "@/assets/images/tab-icons/food.svg";
import hydro from "@/assets/images/tab-icons/hydro.svg";
import song from "@/assets/images/tab-icons/song.svg";
import crate from "@/assets/images/tab-icons/crate.svg";
import space from "@/assets/images/tab-icons/space.svg";
import aux from "@/assets/images/tab-icons/auxbase.svg";
import robo from "@/assets/images/tab-icons/robo.svg";
import security from "@/assets/images/tab-icons/security.svg";
import law from "@/assets/images/tab-icons/law.svg";
import sop from "@/assets/images/tab-icons/sop.svg";
import trial from "@/assets/images/tab-icons/trial.svg";
import traitor from "@/assets/images/tab-icons/traitor.svg";
import hacking from "@/assets/images/tab-icons/hacking.svg";
import weapons from "@/assets/images/tab-icons/weapons.svg";
import uplink from "@/assets/images/tab-icons/uplink.svg";
import rev from "@/assets/images/tab-icons/rev.svg";
import cult from "@/assets/images/tab-icons/cult.svg";
import nuke from "@/assets/images/tab-icons/nuke.svg";
import malf from "@/assets/images/tab-icons/malf.svg";
import combat from "@/assets/images/tab-icons/combat.svg";
import access from "@/assets/images/tab-icons/access.svg";
import xmorph from "@/assets/images/tab-icons/xmorph.svg";
import abduction from "@/assets/images/tab-icons/abduction.svg";
import mafia from "@/assets/images/tab-icons/mafia.svg";

export interface SectionInfo {
  name: string;
  tabs: TabInfo[];
}

export interface TabInfo {
  page: string;
  icon: string | null;
  text?: string;
}

const sections: SectionInfo[] = [
  {
    name: "Медицина",
    tabs: [
      { page: "Guide_to_medicine", text: "Медицина", icon: medicine },
      { page: "Guide_to_chemistry", text: "Химия", icon: chemistry },
      { page: "Guide_to_plumbing", text: "Пламбинг", icon: plumbing },
      { page: "Гранаты", text: "Гранаты", icon: grenade },
      { page: "Infections", text: "Вирусы", icon: virus },
      { page: "Surgery", text: "Хирургия", icon: surgery },
      { page: "Guide_to_Traumas", text: "Травмы", icon: trauma },
      { page: "Guide_to_Wounds", text: "Ранения", icon: wound },
      { page: "Guide_to_Ghetto_Chemistry", text: "Гетто", icon: ghetto },
    ],
  },
  {
    name: "Инженерия",
    tabs: [
      {
        page: "Guide_to_construction",
        text: "Строительство",
        icon: construction,
      },
      {
        page: "Guide_to_advanced_construction",
        text: "Машины",
        icon: machines,
      },
      { page: "Guide_to_power", text: "Энергия", icon: power },
      { page: "Solars", text: "Панели", icon: solar },
      { page: "Guide_to_the_Supermatter", text: "Материя", icon: supermatter },
      {
        page: "Singularity_and_Tesla_engines",
        text: "Тесла/сингуло",
        icon: shield,
      },
      { page: "Gas_turbine", text: "Турбина", icon: turbine },
      { page: "Guide_to_Atmospherics", text: "Атмос", icon: atmos },
      { page: "Guide_to_Telecommunications", icon: tcomm, text: "Телекомы" },
    ],
  },
  {
    name: "Наука",
    tabs: [
      { page: "Guide_to_Research_and_Development", text: "R&D", icon: rnd },
      { page: "Guide_to_robotics", text: "Роботика", icon: robo },
      { page: "Guide_to_toxins", text: "Токсиы", icon: toxins },
      { page: "Guide_to_xenobiology", text: "Ксено", icon: xeno },
      { page: "Guide_to_genetics", text: "Генетика", icon: genetics },
      { page: "Guide_to_Nanites", text: "Наниты", icon: nanites },
    ],
  },
  {
    name: "Охрана",
    tabs: [
      { page: "Guide_to_security", text: "Охрана", icon: security },
      { page: "Space_Law", text: "Законы", icon: law },
      { page: "Standard_Operating_Procedure", text: "С.О.П.", icon: sop },
      { page: "Guide_to_trials", text: "Суды", icon: trial },
    ],
  },
  {
    name: "Антаги",
    tabs: [
      { page: "Traitor", text: "Предатель", icon: traitor },
      { page: "Makeshift_weapons", text: "Самоделки", icon: weapons },
      { page: "Hacking", text: "Взлом", icon: hacking },
      { page: "Guide_to_Combat", text: "Бой", icon: combat },
      { page: "Syndicate_Items", text: "Аплинк", icon: uplink },
      { page: "Illicit_Access", text: "Проникновение", icon: access },
      { page: "Revolution", text: "Революция", icon: rev },
      { page: "Blood_Cult", text: "Культ", icon: cult },
      { page: "Nuclear_Operative", text: "Нюка", icon: nuke },
      { page: "Malfunctioning_AI", text: "Малф", icon: malf },
      { page: "Xenos", text: "Ксеносы", icon: xmorph },
      { page: "Abductor", text: "Абдукторы", icon: abduction },
      { page: "Families", text: "Семьи", icon: mafia },
      { page: "Heretic", text: "Еретик", icon: null },
    ],
  },
  {
    name: "Другое",
    tabs: [
      { page: "Rules", text: "Правила", icon: rules },
      { page: "Ai_Modules", text: "Модули ИИ", icon: aimod },
      {
        page: "Guide_to_Awesome_Miscellaneous_Stuff",
        text: "Разное",
        icon: tips,
      },
      { page: "Critters", text: "Существа", icon: critter },
      { page: "Guide_to_races", text: "Мутанты", icon: races },
      { page: "Guide_to_food", text: "Еда", icon: food },
      { page: "Guide_to_drinks", text: "Напитки", icon: chemistry },
      { page: "Guide_to_hydroponics", text: "Ботаника", icon: hydro },
      { page: "Songs", text: "Музыка", icon: song },
      { page: "Supply_crates", text: "Карго", icon: crate },
      { page: "Auxiliary_Base_Construction_Area", text: "Дроппод", icon: aux },
      { page: "Guide_to_Space_Exploration", text: "Космос", icon: space },
    ],
  },
];

export default sections;
