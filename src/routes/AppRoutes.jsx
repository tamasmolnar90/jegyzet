import { Routes, Route } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import HtmlPage from "../pages/HtmlPage/HtmlPage";
import Szemantika from "../pages/HtmlPage/Szemantika";
import Jegyzet from "../pages/HtmlPage/Jegyzet";

import CssPage from "../pages/CssPage/CssPage";
import CssJegyzet from "../pages/CssPage/Jegyzet";
import CssMediaQuery from "../pages/CssPage/MediaQuery";

import JavaScriptPage from "../pages/JavaScriptPage/JavaScriptPage";
import Es6 from "../pages/JavaScriptPage/Es6";
import JsBeadando01 from "../pages/JavaScriptPage/Beadando01";

import WebfejlesztesPage from "../pages/WebfejlesztesPage/WebfejlesztesPage";
import HasznosLinkek from "../pages/WebfejlesztesPage/HasznosLinkek";
import Design from "../pages/WebfejlesztesPage/Design";
import InteraktivSzamlalo from "../pages/WebfejlesztesPage/InteraktivSzamlalo";
import DarkMode from "../pages/WebfejlesztesPage/DarkMode";
import NevjegyGenerator from "../pages/WebfejlesztesPage/NevjegyGenerator";
import MiniTodo from "../pages/WebfejlesztesPage/MiniTodo";
import MoziJegyfoglalo from "../pages/WebfejlesztesPage/MoziJegyfoglalo";
import Szamologep from "../pages/WebfejlesztesPage/Szamologep";
import TodoApp from "../pages/WebfejlesztesPage/TodoApp";
import FetchAlapok from "../pages/WebfejlesztesPage/FetchAlapok";
import FetchApi from "../pages/WebfejlesztesPage/FetchApi";
import ProjektLetrehozas from "../pages/WebfejlesztesPage/ProjektLetrehozas";
import Express from "../pages/WebfejlesztesPage/Express";

import PythonPage from "../pages/PythonPage/PythonPage";
import PyJegyzet from "../pages/PythonPage/PyJegyzet";
import PyTermekek from "../pages/PythonPage/Termekek";

import MySqlPage from "../pages/MySqlPage/MySqlPage";
import CreateDB from "../pages/MySqlPage/CreateDB";
import CreateTable from "../pages/MySqlPage/CreateTable";
import InsertInto from "../pages/MySqlPage/InsertInto";
import ForeignKey from "../pages/MySqlPage/ForeignKey";
import SqlBeadando01 from "../pages/MySqlPage/Beadando01";
import SqlBeadando02 from "../pages/MySqlPage/Beadando02";
import SqlPizza from "../pages/MySqlPage/Pizza";
import Konyvek from "../pages/MySqlPage/Konyvek";
import Webaruhaz from "../pages/MySqlPage/Webaruhaz";
import Taxi from "../pages/MySqlPage/Taxi";

import PostgreSQLPage from "../pages/PostgreSQLPage/PostgreSQLPage";
import PostCreateDB from "../pages/PostgreSQLPage/CreateDB";
import PostCreateTable from "../pages/PostgreSQLPage/CreateTable";
import PostInsertInto from "../pages/PostgreSQLPage/InsertInto";
import PostForeignKey from "../pages/PostgreSQLPage/ForeignKey";
import PostBeadando01 from "../pages/PostgreSQLPage/Beadando01";
import PostBeadando02 from "../pages/PostgreSQLPage/Beadando02";

import GitPage from "../pages/GitPage/GitPage";
import Beallitasok from "../pages/GitPage/Beallitasok";
import Parancsok from "../pages/GitPage/Parancsok";

import DockerPage from "../pages/DockerPage/DockerPage";
import DockerJegyzet from "../pages/DockerPage/Jegyzet";

import JavaPage from "../pages/JavaPage/JavaPage";
import AiModel from "../pages/JavaPage/AiModel";

import CsharpPage from "../pages/CsharpPage/CsharpPage";
import Feladat01 from "../pages/CsharpPage/Feladat01";
import Feladat02 from "../pages/CsharpPage/Feladat02";
import Feladat03 from "../pages/CsharpPage/Feladat03";
import Feladat04 from "../pages/CsharpPage/Feladat04";
import Feladat05 from "../pages/CsharpPage/Feladat05";
import Feladat06 from "../pages/CsharpPage/Feladat06";
import Feladat07 from "../pages/CsharpPage/Feladat07";
import Feladat08 from "../pages/CsharpPage/Feladat08";
import Feladat09 from "../pages/CsharpPage/Feladat09";
import AESTitkositas from "../pages/CsharpPage/AESTitkositas";
import CsBeadando01 from "../pages/CsharpPage/Beadando01";
import Termekek from "../pages/CsharpPage/Termekek";
import TermekekLinq from "../pages/CsharpPage/TermekekLinq";
import Dronok from "../pages/CsharpPage/Dronok";
import SpaceX from "../pages/CsharpPage/SpaceX";
import Szuperhosok from "../pages/CsharpPage/Szuperhosok";
import MarsRover from "../pages/CsharpPage/MarsRover";
import AIModellek from "../pages/CsharpPage/AIModellek";

import WinFormPage from "../pages/WinFormPage/WinFormPage";
import WinFormJegyzet from "../pages/WinFormPage/Jegyzet";
import MoziAppMySql from "../pages/WinFormPage/MoziAppMySql";
import MoziAppPost from "../pages/WinFormPage/MoziAppPost";

import LinuxPage from "../pages/LinuxPage/LinuxPage";
import LinuxJegyzet from "../pages/LinuxPage/Jegyzet";

import WindowsPage from "../pages/WindowsPage/WindowsPage";
import WindowsInstall from "../pages/WindowsPage/Install";

const htmlLinks = [
  { name: "Szemantika", path: "szemantika", component: Szemantika },
  { name: "Jegyzet", path: "jegyzet", component: Jegyzet },
];

const cssLinks = [
  { name: "Jegyzet", path: "jegyzet", component: CssJegyzet },
  { name: "Media Query", path: "mediaquery", component: CssMediaQuery },
];

const jsLinks = [
  { name: "ES6", path: "es6", component: Es6 },
  { name: "Beadandó 1", path: "beadando01", component: JsBeadando01 },
];

const webLinks = [
  { name: "Hasznos linkek", path: "hasznoslinkek", component: HasznosLinkek },
  { name: "Design", path: "design", component: Design },
  {
    name: "Interaktív Számláló",
    path: "interaktivszamlalo",
    component: InteraktivSzamlalo,
  },
  { name: "Dark Mode", path: "darkmode", component: DarkMode },
  {
    name: "Névjegy Generátor",
    path: "nevjegygenerator",
    component: NevjegyGenerator,
  },
  { name: "MiniTodo", path: "minitodo", component: MiniTodo },
  {
    name: "Mozi Jegyfoglaló",
    path: "mozijegyfoglalo",
    component: MoziJegyfoglalo,
  },
  { name: "Számológép", path: "szamologep", component: Szamologep },
  { name: "TodoApp", path: "todo-app", component: TodoApp },
  { name: "Fetch alapok", path: "fetchalapok", component: FetchAlapok },
  { name: "Fetch-API", path: "fetch-api", component: FetchApi },
  {
    name: "Projekt létrehozás",
    path: "projektletrehozas",
    component: ProjektLetrehozas,
  },
  { name: "Express", path: "express", component: Express },
];

const pythonLinks = [
  { name: "Jegyzet", path: "jegyzet", component: PyJegyzet },
  { name: "Termekek", path: "termekek", component: PyTermekek },
];

const mysqlLinks = [
  { name: "CREATE DATABASE", path: "create-database", component: CreateDB },
  { name: "CREATE TABLE", path: "create-table", component: CreateTable },
  { name: "INSERT INTO", path: "insert-into", component: InsertInto },
  { name: "FOREIGN KEY", path: "foreign-key", component: ForeignKey },
  { name: "Beadandó 1", path: "beadando01", component: SqlBeadando01 },
  { name: "Beadandó 2", path: "beadando02", component: SqlBeadando02 },
  { name: "Pizza", path: "pizza", component: SqlPizza },
  { name: "Könyvek", path: "konyvek", component: Konyvek },
  { name: "Webaruhaz", path: "webaruhaz", component: Webaruhaz },
  { name: "Taxi", path: "taxi", component: Taxi },
];

const postgresqlLinks = [
  {
    name: "CREATE DATABASE",
    path: "create-database",
    component: PostCreateDB,
  },
  { name: "CREATE TABLE", path: "create-table", component: PostCreateTable },
  { name: "INSERT INTO", path: "insert-into", component: PostInsertInto },
  { name: "FOREIGN KEY", path: "foreign-key", component: PostForeignKey },
  { name: "Beadandó 1", path: "beadando01", component: PostBeadando01 },
  { name: "Beadandó 2", path: "beadando02", component: PostBeadando02 },
];

const gitLinks = [
  { name: "Beállítások", path: "beallitasok", component: Beallitasok },
  { name: "Parancsok", path: "parancsok", component: Parancsok },
];

const dockerLinks = [
  { name: "Jegyzet", path: "jegyzet", component: DockerJegyzet },
];

const javaLinks = [{ name: "AiModel", path: "aimodel", component: AiModel }];

const csharpLinks = [
  { name: "Webshop", path: "feladat01", component: Feladat01 },
  { name: "Autókereskedés", path: "feladat02", component: Feladat02 },
  { name: "Webshop 2", path: "feladat03", component: Feladat03 },
  { name: "Konzolos asszisztens", path: "feladat04", component: Feladat04 },
  { name: "Diáknyilvántartó", path: "feladat05", component: Feladat05 },
  { name: "Okos számkitaláló", path: "feladat06", component: Feladat06 },
  {
    name: "Konzolos jelszó asszisztens",
    path: "feladat07",
    component: Feladat07,
  },
  { name: "Profil generátor", path: "feladat08", component: Feladat08 },
  {
    name: "Színház jegyfoglaló rendszer",
    path: "feladat09",
    component: Feladat09,
  },
  { name: "AES Titkosítás", path: "eastitkositas", component: AESTitkositas },
  { name: "Beadandó 01", path: "beadando01", component: CsBeadando01 },
  { name: "Termekek", path: "termekek", component: Termekek },
  { name: "Termekek - linq", path: "termekek-linq", component: TermekekLinq },
  { name: "Dronok", path: "dronok", component: Dronok },
  { name: "SpaceX", path: "spacex", component: SpaceX },
  { name: "Szuperhosok", path: "szuperhosok", component: Szuperhosok },
  { name: "MarsRover", path: "marsrover", component: MarsRover },
  { name: "AIModellek", path: "aimodellek", component: AIModellek },
];

const winFormLinks = [
  { name: "Jegyzet", path: "jegyzet", component: WinFormJegyzet },
  { name: "MoziApp (MySQL)", path: "mozi-app-mysql", component: MoziAppMySql },
  {
    name: "MoziApp (Postgres)",
    path: "mozi-app-postgres",
    component: MoziAppPost,
  },
];

const linuxLinks = [
  { name: "Jegyzet", path: "jegyzet", component: LinuxJegyzet },
];

const windowsLinks = [
  { name: "Install", path: "install", component: WindowsInstall },
];

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="html" element={<HtmlPage links={htmlLinks} />}>
          {htmlLinks.map((link) => (
            <Route
              key={link.path}
              path={link.path}
              element={<link.component />}
            />
          ))}
        </Route>

        <Route path="css" element={<CssPage links={cssLinks} />}>
          {cssLinks.map((link) => (
            <Route
              key={link.path}
              path={link.path}
              element={<link.component />}
            />
          ))}
        </Route>

        <Route path="js" element={<JavaScriptPage links={jsLinks} />}>
          {jsLinks.map((link) => (
            <Route
              key={link.path}
              path={link.path}
              element={<link.component />}
            />
          ))}
        </Route>

        <Route
          path="webfejlesztes"
          element={<WebfejlesztesPage links={webLinks} />}
        >
          {webLinks.map((link) => (
            <Route
              key={link.path}
              path={link.path}
              element={<link.component />}
            />
          ))}
        </Route>

        <Route path="python" element={<PythonPage links={pythonLinks} />}>
          {pythonLinks.map((link) => (
            <Route
              key={link.path}
              path={link.path}
              element={<link.component />}
            />
          ))}
        </Route>

        <Route path="mysql" element={<MySqlPage links={mysqlLinks} />}>
          {mysqlLinks.map((link) => (
            <Route
              key={link.path}
              path={link.path}
              element={<link.component />}
            />
          ))}
        </Route>

        <Route
          path="postgresql"
          element={<PostgreSQLPage links={postgresqlLinks} />}
        >
          {postgresqlLinks.map((link) => (
            <Route
              key={link.path}
              path={link.path}
              element={<link.component />}
            />
          ))}
        </Route>

        <Route path="git" element={<GitPage links={gitLinks} />}>
          {gitLinks.map((link) => (
            <Route
              key={link.path}
              path={link.path}
              element={<link.component />}
            />
          ))}
        </Route>

        <Route path="docker" element={<DockerPage links={dockerLinks} />}>
          {dockerLinks.map((link) => (
            <Route
              key={link.path}
              path={link.path}
              element={<link.component />}
            />
          ))}
        </Route>

        <Route path="java" element={<JavaPage links={javaLinks} />}>
          {javaLinks.map((link) => (
            <Route
              key={link.path}
              path={link.path}
              element={<link.component />}
            />
          ))}
        </Route>

        <Route path="csharp" element={<CsharpPage links={csharpLinks} />}>
          {csharpLinks.map((link) => (
            <Route
              key={link.path}
              path={link.path}
              element={<link.component />}
            />
          ))}
        </Route>

        <Route path="winform" element={<WinFormPage links={winFormLinks} />}>
          {winFormLinks.map((link) => (
            <Route
              key={link.path}
              path={link.path}
              element={<link.component />}
            />
          ))}
        </Route>

        <Route path="linux" element={<LinuxPage links={linuxLinks} />}>
          {linuxLinks.map((link) => (
            <Route
              key={link.path}
              path={link.path}
              element={<link.component />}
            />
          ))}
        </Route>

        <Route path="windows" element={<WindowsPage links={windowsLinks} />}>
          {windowsLinks.map((link) => (
            <Route
              key={link.path}
              path={link.path}
              element={<link.component />}
            />
          ))}
        </Route>
      </Route>
    </Routes>
  );
}
