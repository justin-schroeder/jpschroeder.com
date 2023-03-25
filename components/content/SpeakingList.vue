<script setup lang="ts">
const years: Array<{
  year: string;
  talks: { location: string; link?: string; date?: Date }[];
}> = [
  {
    year: '2023',
    talks: [
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
    year: '2020',
    talks: [
      {
        location: 'Views on Vue Podcast',
        link: 'https://topenddevs.com/podcasts/views-on-vue/episodes/vov-120-vue-formulate-with-justin-schroeder',
      },
      {
        location: 'VueJS Berlin Meetup',
        link: 'https://www.youtube.com/watch?v=Dj2xPmdXNhs&t=16s',
      },
    ],
  },
  {
    year: '2018',
    talks: [
      {
        location: 'EDUI Conference',
      },
      {
        location: 'CVJS Meetup',
      },
    ],
  },
  {
    year: '2017',
    talks: [
      {
        location: 'SXSW Interactive',
      },
      {
        location: 'Drupal Gov Con',
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
