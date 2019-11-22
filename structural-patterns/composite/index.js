/**
 * Описание. Компоновщик
 * Цели. Компоновщик — это структурный паттерн проектирования, который позволяет сгруппировать
 * множество объектов в древовидную структуру, а затем работать с ней так, как будто это единичный объект.
 * Например, наши любимые фреймворки иеют древовидную струтуру. Компоновщик.
 * Компонент опредлеяет общий вид для составных
 * Лист это простой компонент дерева
 * Композит содержит набор дочерних компонентов
 * */

const Application = require('./application');
const Sidebar = require('./sidebar.js');
const Navbar = require('./navbar');

const Logo = require('./logo');
const NavLinks = require('./nav-links');

const logo = new Logo({ name: 'LOGO' });
const navLinks = new NavLinks({ name: 'NAV_LINKS' });

const sidebar = new Sidebar({
  name: 'SIDEBAR',
  children: [navLinks]
});

const navbar = new Navbar({
  name: 'NAVBAR',
  children: [logo]
});


const application = new Application({
  name: 'APPLICATION',
  children: [ sidebar, navbar ]
});

application.update();



