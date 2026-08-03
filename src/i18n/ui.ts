import type { Locale } from '../lib/i18n';

export type UiCopy = {
  nav: {
    home: string;
    blog: string;
    about: string;
    friend: string;
    search: string;
  };
  home: {
    eyebrow: string;
    intro: string;
    latest: string;
    selected: string;
    viewAll: string;
    emptyTitle: string;
    emptyBody: string;
    languageNote: string;
  };
  blog: {
    eyebrow: string;
    title: string;
    intro: string;
    archive: string;
    allYears: string;
    emptyTitle: string;
    emptyBody: string;
    read: string;
  };
  article: {
    back: string;
    minRead: string;
    updated: string;
    related: string;
    comments: string;
    setup: string;
  };
  tags: {
    eyebrow: string;
    title: string;
    intro: string;
    posts: string;
    emptyTitle: string;
    emptyBody: string;
  };
  search: {
    eyebrow: string;
    title: string;
    intro: string;
    placeholder: string;
    result: string;
    noResults: string;
    emptyTitle: string;
    emptyBody: string;
  };
  about: {
    eyebrow: string;
    title: string;
    intro: string;
    body: string[];
    contact: string;
  };
  friend: {
    eyebrow: string;
    title: string;
    empty: string;
    note: string;
  };
  notFound: {
    eyebrow: string;
    title: string;
    body: string;
    back: string;
  };
  footer: {
    contact: string;
    rights: string;
  };
  common: {
    openMenu: string;
    closeMenu: string;
    switchTheme: string;
    chooseLanguage: string;
    readArticle: string;
    viewTag: string;
  };
};

export const ui: Record<Locale, UiCopy> = {
  zh: {
    nav: { home: '首页', blog: '文章', about: '关于', friend: 'Friend', search: '搜索' },
    home: {
      eyebrow: 'PERSONAL NOTES / 个人随笔',
      intro: '一个乐善好施的coder，记录代码、生活，以及那些值得慢慢想清楚的事情。',
      latest: '最新文章',
      selected: '精选内容',
      viewAll: '查看全部文章',
      emptyTitle: '文章正在整理中',
      emptyBody: '这里会慢慢放进一些代码、生活和正在思考的东西。',
      languageNote: '用四种语言记录同一片日常。',
    },
    blog: {
      eyebrow: 'ARCHIVE / 文章归档',
      title: '文章',
      intro: '按时间、标签和兴趣，慢慢翻阅这里的记录。',
      archive: '归档',
      allYears: '全部年份',
      emptyTitle: '还没有公开文章',
      emptyBody: '第一篇文章发布后，会出现在这里。',
      read: '阅读文章',
    },
    article: { back: '返回文章', minRead: '分钟阅读', updated: '更新于', related: '继续阅读', comments: '留言', setup: 'GitHub Discussions 配置完成后，留言区会在这里启用。' },
    tags: {
      eyebrow: 'INDEX / 标签索引',
      title: '标签',
      intro: '用几个关键词，找到相近的记录。',
      posts: '篇文章',
      emptyTitle: '标签还没有内容',
      emptyBody: '等文章公开后，这里会自然长出来。',
    },
    search: {
      eyebrow: 'FIND / 搜索',
      title: '找到一篇记录',
      intro: '搜索标题、摘要和标签。',
      placeholder: '输入关键词…',
      result: '条结果',
      noResults: '没有找到匹配的文章。',
      emptyTitle: '搜索会在文章公开后变得有用',
      emptyBody: '现在可以先从首页或文章归档开始。',
    },
    about: {
      eyebrow: 'ABOUT / 关于',
      title: '关于我',
      intro: '一个乐善好施的coder。',
      body: ['这里是一个个人空间，用来放下代码、想法和一些生活片段。', '不追赶所有热点，只记录真正留下来的东西。'],
      contact: '欢迎通过邮箱联系我。',
    },
    friend: { eyebrow: 'FRIEND / 朋友', title: 'Friend', empty: 'Friends will appear here soon.', note: '这里会慢慢放入朋友和友链。' },
    notFound: { eyebrow: '404 / NOT FOUND', title: '这页走丢了', body: '地址可能已经改变，也可能还没有被写下来。', back: '回到首页' },
    footer: { contact: 'QQ邮箱', rights: '保留所有权利' },
    common: { openMenu: '打开菜单', closeMenu: '关闭菜单', switchTheme: '切换主题', chooseLanguage: '选择语言', readArticle: '阅读文章', viewTag: '查看标签' },
  },
  en: {
    nav: { home: 'Home', blog: 'Journal', about: 'About', friend: 'Friend', search: 'Search' },
    home: {
      eyebrow: 'PERSONAL NOTES',
      intro: 'A generous coder writing about code, life, and the things worth thinking through slowly.',
      latest: 'Latest notes',
      selected: 'Selected reading',
      viewAll: 'View all notes',
      emptyTitle: 'Notes are being gathered',
      emptyBody: 'Code, life, and unfinished thoughts will find their way here soon.',
      languageNote: 'One everyday life, written in four languages.',
    },
    blog: { eyebrow: 'ARCHIVE', title: 'Journal', intro: 'A quiet archive of notes, ideas, and small discoveries.', archive: 'Archive', allYears: 'All years', emptyTitle: 'No public notes yet', emptyBody: 'The first note will appear here when it is ready.', read: 'Read note' },
    article: { back: 'Back to journal', minRead: 'min read', updated: 'Updated', related: 'Keep reading', comments: 'Comments', setup: 'The comments will be enabled here once GitHub Discussions is configured.' },
    tags: { eyebrow: 'INDEX', title: 'Tags', intro: 'A few keywords to find related notes.', posts: 'notes', emptyTitle: 'No notes under this tag', emptyBody: 'This index will grow with the journal.' },
    search: { eyebrow: 'FIND', title: 'Find a note', intro: 'Search titles, summaries, and tags.', placeholder: 'Type to search…', result: 'results', noResults: 'No notes matched that search.', emptyTitle: 'Search will come alive with the journal', emptyBody: 'For now, start with the home page or archive.' },
    about: { eyebrow: 'ABOUT', title: 'About me', intro: 'A generous coder.', body: ['This is a personal space for code, ideas, and small pieces of life.', 'I do not try to follow every trend; I keep what stays meaningful.'], contact: 'You are welcome to reach me by email.' },
    friend: { eyebrow: 'FRIEND', title: 'Friend', empty: 'Friends will appear here soon.', note: 'A place for friends and links, coming together slowly.' },
    notFound: { eyebrow: '404 / NOT FOUND', title: 'This page wandered off', body: 'The address may have changed, or it may not have been written yet.', back: 'Back home' },
    footer: { contact: 'QQ email', rights: 'All rights reserved' },
    common: { openMenu: 'Open menu', closeMenu: 'Close menu', switchTheme: 'Switch theme', chooseLanguage: 'Choose language', readArticle: 'Read note', viewTag: 'View tag' },
  },
  ja: {
    nav: { home: 'ホーム', blog: '記録', about: '私について', friend: 'Friend', search: '検索' },
    home: { eyebrow: 'PERSONAL NOTES', intro: 'コードと暮らし、ゆっくり考えていきたいことを記録する、やさしいcoderです。', latest: '最新の記録', selected: 'おすすめ', viewAll: 'すべての記録を見る', emptyTitle: '記事を準備しています', emptyBody: 'コードや暮らし、考えていることを少しずつ置いていきます。', languageNote: 'ひとつの日常を、四つの言語で。' },
    blog: { eyebrow: 'ARCHIVE', title: '記録', intro: '時間とタグを手がかりに、ここにある記録をめくります。', archive: 'アーカイブ', allYears: 'すべての年', emptyTitle: '公開された記事はまだありません', emptyBody: '最初の記事が公開されると、ここに表示されます。', read: '読む' },
    article: { back: '記録に戻る', minRead: '分で読めます', updated: '更新', related: '続きを読む', comments: 'コメント', setup: 'GitHub Discussions の設定が完了すると、ここでコメントできます。' },
    tags: { eyebrow: 'INDEX', title: 'タグ', intro: 'いくつかのキーワードから記録を探します。', posts: '件', emptyTitle: 'このタグにはまだ記事がありません', emptyBody: '記事が増えると、ここも育っていきます。' },
    search: { eyebrow: 'FIND', title: '記録を探す', intro: 'タイトル、概要、タグを検索できます。', placeholder: 'キーワードを入力…', result: '件', noResults: '一致する記事がありません。', emptyTitle: '記事が増えると検索が役立ちます', emptyBody: 'まずはホームかアーカイブをご覧ください。' },
    about: { eyebrow: 'ABOUT', title: '私について', intro: '人に親切なcoderです。', body: ['ここは、コードや考え、暮らしの一部を置いておく個人の場所です。', 'すべての流行を追うのではなく、残ったものを記録します。'], contact: 'メールでお気軽にご連絡ください。' },
    friend: { eyebrow: 'FRIEND', title: 'Friend', empty: 'Friends will appear here soon.', note: '友人やリンクを、これから少しずつ追加します。' },
    notFound: { eyebrow: '404 / NOT FOUND', title: 'このページは迷子です', body: 'アドレスが変わったか、まだ書かれていないのかもしれません。', back: 'ホームへ戻る' },
    footer: { contact: 'QQメール', rights: 'All rights reserved' },
    common: { openMenu: 'メニューを開く', closeMenu: 'メニューを閉じる', switchTheme: 'テーマを切り替える', chooseLanguage: '言語を選ぶ', readArticle: '読む', viewTag: 'タグを見る' },
  },
  fr: {
    nav: { home: 'Accueil', blog: 'Journal', about: 'À propos', friend: 'Friend', search: 'Recherche' },
    home: { eyebrow: 'PERSONAL NOTES', intro: 'Un codeur généreux qui écrit sur le code, la vie et les choses qui méritent du temps.', latest: 'Dernières notes', selected: 'À lire', viewAll: 'Voir toutes les notes', emptyTitle: 'Les notes sont en préparation', emptyBody: 'Le code, la vie et quelques pensées trouveront bientôt leur place ici.', languageNote: 'Une vie quotidienne, écrite en quatre langues.' },
    blog: { eyebrow: 'ARCHIVE', title: 'Journal', intro: 'Une archive calme de notes, d’idées et de petites découvertes.', archive: 'Archive', allYears: 'Toutes les années', emptyTitle: 'Aucune note publique pour le moment', emptyBody: 'La première note apparaîtra ici lorsqu’elle sera prête.', read: 'Lire la note' },
    article: { back: 'Retour au journal', minRead: 'min de lecture', updated: 'Mis à jour', related: 'Continuer la lecture', comments: 'Commentaires', setup: 'Les commentaires seront activés ici une fois GitHub Discussions configuré.' },
    tags: { eyebrow: 'INDEX', title: 'Tags', intro: 'Quelques mots-clés pour retrouver les notes proches.', posts: 'notes', emptyTitle: 'Aucune note sous ce tag', emptyBody: 'Cet index grandira avec le journal.' },
    search: { eyebrow: 'FIND', title: 'Trouver une note', intro: 'Rechercher dans les titres, résumés et tags.', placeholder: 'Écrire pour rechercher…', result: 'résultats', noResults: 'Aucune note ne correspond à cette recherche.', emptyTitle: 'La recherche prendra vie avec le journal', emptyBody: 'Pour le moment, commencez par l’accueil ou les archives.' },
    about: { eyebrow: 'ABOUT', title: 'À propos de moi', intro: 'Un codeur généreux.', body: ['Cet espace personnel accueille du code, des idées et quelques morceaux de vie.', 'Je ne cherche pas à suivre toutes les tendances ; je garde ce qui reste important.'], contact: 'Vous pouvez me contacter par email.' },
    friend: { eyebrow: 'FRIEND', title: 'Friend', empty: 'Friends will appear here soon.', note: 'Un espace pour les amis et les liens, bientôt.' },
    notFound: { eyebrow: '404 / NOT FOUND', title: 'Cette page s’est égarée', body: 'L’adresse a peut-être changé, ou cette page n’a pas encore été écrite.', back: 'Retour à l’accueil' },
    footer: { contact: 'Email QQ', rights: 'Tous droits réservés' },
    common: { openMenu: 'Ouvrir le menu', closeMenu: 'Fermer le menu', switchTheme: 'Changer de thème', chooseLanguage: 'Choisir la langue', readArticle: 'Lire la note', viewTag: 'Voir le tag' },
  },
};
