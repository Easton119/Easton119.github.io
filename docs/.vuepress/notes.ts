import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const demoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

const studyNote = defineNoteConfig({
  dir: '开发学习',
  link: '/study',
  sidebar: ['','cpp语法图']
})

const aiCompilerNote = defineNoteConfig({
  dir: 'AI编译器',
  link: '/aicompiler',
  sidebar: ['', '基础概念', '传统编译器', 'AI编译器'],
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [demoNote,studyNote,aiCompilerNote],
})

