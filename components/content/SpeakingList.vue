<script setup lang="ts">
const years: Array<{
  year: string;
  talks: { location: string; link?: string; date?: Date }[];
}> = [
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
      }
    ]
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
          <ClientOnly>
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
