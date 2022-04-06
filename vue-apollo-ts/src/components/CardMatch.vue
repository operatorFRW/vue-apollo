<template>
  <div class="CardMatch">
    <div class="CardMatch__score">
      <div class="CardMatch__resultTeam">
        <img
          class="CardMatch__logo"
          v-lazy="{
            src: match.team_home_badge || require('@/assets/noImage.jpg'),
            loading: require('@/assets/load.svg'),
            error: require('@/assets/noImage.jpg'),
          }"
          :alt="match.match_hometeam_name"
        />
        <span
          class="CardMatch__name"
          :class="{
            'CardMatch__name--active': getWinner === 1,
          }"
          >{{ match.match_hometeam_name }}</span
        >
        <span
          class="CardMatch__goals"
          :class="{
            'CardMatch__goals--active': getWinner === 1,
          }"
          >{{ match.match_hometeam_score }}</span
        >
      </div>
      <div class="CardMatch__resultTeam">
        <img
          class="CardMatch__logo"
          v-lazy="{
            src: match.team_away_badge || require('@/assets/noImage.jpg'),
            loading: require('@/assets/load.svg'),
            error: require('@/assets/noImage.jpg'),
          }"
          :alt="match.match_awayteam_name"
        />
        <span
          class="CardMatch__name"
          :class="{
            'CardMatch__name--active': getWinner === 0,
          }"
          >{{ match.match_awayteam_name }}</span
        >
        <span
          class="CardMatch__goals"
          :class="{
            'CardMatch__goals--active': getWinner === 0,
          }"
          >{{ match.match_awayteam_score }}</span
        >
      </div>
    </div>
    <div class="CardMatch__info">
      <span class="CardMatch__status">{{ match.match_status }}</span>
      <span class="CardMatch__date">{{ transformDate }}</span>
      <span class="CardMatch__time">{{ match.match_time }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { DataMatch } from "@/graphql/types";
import moment from "moment";

export default defineComponent({
  props: {
    match: {
      type: Object as PropType<DataMatch>,
      required: true,
    },
  },
  computed: {
    getWinner() {
      if (this.match.match_hometeam_score > this.match.match_awayteam_score)
        return 1;
      else if (
        this.match.match_hometeam_score === this.match.match_awayteam_score
      )
        return 2;
      else return 0;
    },
    transformDate() {
      return moment(this.match.match_date).format("MMM, MM.DD");
    },
  },
});
</script>

<style scoped lang="scss">
.CardMatch {
  display: flex;
  align-items: center;

  padding: 10px;
  border: 1px solid rgba(56, 35, 63, 0.349);
  border-radius: 8px;

  &__score {
    margin-right: 30px;
    width: 200px;
  }

  &__resultTeam {
    display: flex;
    align-items: center;

    padding: 5px 0;
  }
  &__logo {
    display: block;
    width: 24px;
    height: 24px;

    margin-right: 24px;
  }

  &__goals {
    display: block;
    margin-left: auto;
  }

  &__name,
  &__goals {
    &--active {
      font-weight: 600;
      color: black;
    }
  }

  &__goals {
    position: relative;
    &--active {
      &::after {
        content: "";
        display: block;
        height: 1px;
        border: 4px solid transparent;
        border-right-color: black;
        transform: translateY(-50%);
        position: absolute;
        top: 50%;
        right: -7px;
      }
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__status,
  &__date,
  &__time {
    margin-bottom: 5px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__status {
  }
  &__date {
  }
  &__time {
  }
}
</style>
