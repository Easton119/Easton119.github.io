import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const demoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

const studyNote = defineNoteConfig({
  dir: '开发学习',
  link: '/study',
  sidebar: [
    { text: '学习笔记首页', link: '/study/' }, // 首页
    { text: '课程介绍', link: '/study/introduce/' }, 
    { text: '进阶指南', link: '/study/guide/' },
  ],
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [demoNote,studyNote],
})

