<script setup lang="ts">
const years: Array<{
  year: string;
  talks: { location: string; link?: string; date?: Date; monthYear?: string }[];
}> = [
  {
    year: '2027',
    talks: [
      {
        location: 'Richmond meetup',
        monthYear: 'February 2027',
      },
    ],
  },
  {
    year: '2026',
    talks: [
      {
        location: 'AGNTCon + MCPCon North America',
        link: 'https://events.linuxfoundation.org/agntcon-mcpcon-north-america/program/schedule/?id=1260899',
        monthYear: 'October 2026',
      },
      {
        location: 'Cloudflare Connect',
        link: 'https://www.cloudflare.com/connect/speakers/',
        monthYear: 'October 2026',
      },
      {
        location: 'beCamp',
        link: 'https://be.camp/schedule/',
        monthYear: 'October 2026',
      },
      {
        location: 'Cville AI Explorers',
        link: 'https://www.meetup.com/cville-tech/events/315584929/',
        monthYear: 'July 2026',
      },
      {
        location: "AI Engineer World's Fair Online Track",
        link: 'https://www.youtube.com/watch?v=spNAUEgq_A8',
        monthYear: 'June 2026',
      },
      {
        location: 'Standard Agents launch dinner',
        monthYear: 'February 2026',
      },
    ],
  },
  {
    year: '2025',
    talks: [
      {
        location: 'AI-Driven Development Day: MCP Edition',
        link: 'https://aidd.io/ai-driven-development-day-mcp-edition',
        monthYear: 'November 2025',
      },
      {
        location: 'AI-Driven Development Day',
        link: 'https://aidd.io/ai-driven-development-day',
        monthYear: 'September 2025',
      },
      {
        location: 'Frontend Nation',
        link: 'https://youtu.be/SgYP2vByzDY',
        monthYear: 'June 2025',
      },
      {
        location: 'VueConf US',
        link: 'https://vueconf.us',
        date: new Date('2025-05-17'),
      },
      {
        location: 'RVA.js Conf',
        link: 'https://rvajavascript.com/',
        date: new Date('2025-03-14'),
      },
      {
        location: 'DejaVue Podcast',
        link: 'https://www.youtube.com/watch?v=vtv6J3KZXaA&t=4725s',
        date: new Date('2025-01-30'),
      },
    ],
  },
  {
    year: '2024',
    talks: [
      {
        location: 'vuejs.de Conf',
        link: 'https://conf.vuejs.de/',
        date: new Date('2024-10-09'),
      },
      {
        location: 'JS Nation',
        link: 'https://jsnation.com',
        date: new Date('2024-06-17'),
      },
      {
        location: 'VueConf US',
        link: 'https://vueconf.us',
        date: new Date('2024-05-17'),
      },
      {
        location: 'VueJS Live',
        link: 'https://vuejslive.com',
        date: new Date('2024-04-25'),
      },
      {
        location: 'VueJS Amsterdam',
        link: 'https://vuejs.amsterdam',
        date: new Date('2024-02-28'),
      },
      {
        location: 'VueJS Nation',
        link: 'https://vuejsnation.com',
        date: new Date('2024-01-24'),
      },
    ],
  },
  {
    year: '2023',
    talks: [
      {
        location: 'RVA.js Conf',
        link: 'https://rvatech.com/rvatech-events/rvajs',
        date: new Date('2023-11-17'),
      },
      {
        location: 'Vue Toronto',
        link: 'https://www.vuetoronto.com/',
        date: new Date('2023-11-10'),
      },
      {
        location: 'GitHub Universe',
        link: 'https://githubuniverse.com/',
        date: new Date('2023-11-09'),
      },
      {
        location: 'Connect.tech',
        link: 'https://2023.connect.tech',
        date: new Date('2023-10-25'),
      },
      {
        location: 'THAT conference',
        link: 'https://that.us/events/wi/2023/',
        date: new Date('2023-07-24'),
      },
      {
        location: 'SailsConf',
        link: 'https://sailsconf.com/',
        date: new Date('2023-06-14'),
      },
      {
        location: 'VueJS Global Summit',
        link: 'https://events.geekle.us/vuejs23/',
        date: new Date('2023-06-06'),
      },
      {
        location: 'VueConf US',
        link: 'http://vueconf.us',
        date: new Date('2023-05-25'),
      },
      {
        location: 'Teach Kelvin Your Thing',
        link: 'https://www.youtube.com/watch?v=K61oLjg0N4A',
        date: new Date('2023-05-17'),
      },
      {
        location: 'VueJS Live',
        link: 'https://vuejslive.com',
        date: new Date('2023-05-15'),
      },
      {
        location: 'RVAJS Meetup',
        link: 'https://www.meetup.com/rva-js/events/szjphryfchbdb/',
        date: new Date('2023-05-02'),
      },
      {
        location: 'Frontrunners Conference',
        link: 'https://frontrunners.tech/',
        date: new Date('2023-03-10'),
      },
      {
        location: 'VueJS Nation',
        link: 'https://www.youtube.com/watch?v=jtlFMPT3tSI',
        date: new Date('2023-01-26'),
      },
    ],
  },
  {
    year: '2022',
    talks: [
      {
        location: 'Connect.tech',
        link: 'https://www.youtube.com/watch?v=Gj9RQYU_fFk&t=2182s',
      },
      {
        location: 'Svelte Society',
      },
      {
        location: 'RVAJS Conference',
      },
    ],
  },
  {
    year: 'Ancient history',
    talks: [
      {
        location: 'Views on Vue Podcast',
      },
      {
        location: 'VueJS Berlin Meetup',
      },
      {
        location: 'EDUI Conference',
      },
      {
        location: 'CVJS Meetup',
      },
      {
        location: 'SXSW Interactive',
      },
      {
        location: 'Drupal Gov Con',
      },
      {
        location: 'It was a long time ago, probably others...',
      },
    ],
  },
];
const today = new Date();
</script>

<template>
  <ul class="years">
    <li v-for="year in years">
      <h3 class="year">{{ year.year }}</h3>
      <ul class="talk-list">
        <li v-for="talk in year.talks" :key="talk.location" class="talk">
          <component
            :is="talk.link ? 'a' : 'span'"
            class="talk"
            :href="talk.link"
          >
            <span class="talk-location">
              {{ talk.location }}
            </span>
          </component>
          <span v-if="talk.monthYear" class="talk-date">
            ({{ talk.monthYear }})
          </span>
          <ClientOnly v-else>
            <span v-if="talk.date && talk.date > today" class="talk-date">
              (this
              {{ talk.date.toLocaleDateString('en-US', { month: 'long' }) }})
            </span>
          </ClientOnly>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style scoped>
.talk {
  margin-bottom: 1em;
  vertical-align: middle;
}
.talk-date {
  font-size: 0.8em;
  color: var(--text-m);
}
</style>
