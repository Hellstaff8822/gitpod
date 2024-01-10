<template>
  <div class="developers developers_container">
    <div class="developers__title">Used by 400,000+ developers.</div>

    <div class="developers__card">
      <swiper :slides-per-view="'auto'" :space-between="30" :grid="{
      }" :pagination="{
  clickable: true,
}" class="mySwiper">
        <swiper-slide>
          <div class="developers-item small-developers-item">
            <div class="developers-item__info ">
              <span class="title">GitPod is incredibly cool. </span> <br><br>In my opinion, this is a big step in open
              source software contribution. I'm excited to see where we go from
              here.
            </div>
            <div class="developers-item__developer">
              <div class="developers-item__img">
                <img src="@/assets/avatars/1.png" alt="one" />
              </div>
              <div class="developers-item__info">
                <div class="developers-item__name">Ben Halpern</div>
                <div class="developers-item_position">
                  Creator and Co-founder <span>@forem</span> and
                  <span>@ThePracticalDev</span>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="developers-item">
            <div class="developers-item__info">
              Let's say we were overwhelmed how smooth @gitpod workspaces creation &
              own Docker image for workspaces worked.<br><br> Plus, installing @code
              extensions from the store and integrating @gitlab CI. That blew my
              mind entirely, and that is hard ;)
            </div>
            <div class="developers-item__developer">
              <div class="developers-item__img">
                <img src="@/assets/avatars/2.png" alt="two" />
              </div>
              <div class="developers-item__info">
                <div class="developers-item__name">Michael Friedrich</div>
                <div class="developers-item_position">
                  Developer Evangelist <span>@GitLab</span>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="developers-item">
            <div class="developers-item__info">
              Look at any PR (pull request) in a full coding environment where you
              can edit, build, and test the PR code, by just prepending "gitpod.io#"
              to the PR URL. Super useful for reviewing/testing stuff without having
              to check it out locally!
            </div>
            <div class="developers-item__developer">
              <div class="developers-item__img">
                <img src="@/assets/avatars/3.png" alt="three" />
              </div>
              <div class="developers-item__info">
                <div class="developers-item__name">Julius Volz</div>
                <div class="developers-item_position">
                  Creator <span>@forem</span>and <span>@PrometheusIO</span>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="developers-item">
            <div class="developers-item__info">
              I think I’m in love with @gitpod. It’s such a powerful tool. I’ve
              learned so much in the past week just from stumbling across Github
              repos that interest me and appending “http://gitpod.io/#” to the URL.
              A+ tool all around.
            </div>
            <div class="developers-item__developer">
              <div class="developers-item__img">
                <img src="@/assets/avatars/4.png" alt="four" />
              </div>
              <div class="developers-item__info">
                <div class="developers-item__name">David Ressler</div>
                <div class="developers-item_position">
                  Engineering Manager <span>@instagram</span>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <swiper :direction="'vertical'" :space-between="5" :pagination="{
        clickable: true,
      }" class="mySwiper-mobile">
        <swiper-slide class="mySwiper-mobile__slide">
          <div class="developers-item small-developers-item">
            <div class="developers-item__info ">
              <span class="title">GitPod is incredibly cool. </span> <br><br>In my opinion, this is a big step in open
              source software contribution. I'm excited to see where we go from
              here.
            </div>
            <div class="developers-item__developer">
              <div class="developers-item__img">
                <img src="@/assets/avatars/1.png" alt="one" />
              </div>
              <div class="developers-item__info">
                <div class="developers-item__name">Ben Halpern</div>
                <div class="developers-item_position">
                  Creator and Co-founder <span>@forem</span> and
                  <span>@ThePracticalDev</span>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="developers-item">
            <div class="developers-item__info">
              Let's say we were overwhelmed how smooth @gitpod workspaces creation &
              own Docker image for workspaces worked.<br><br> Plus, installing @code
              extensions from the store and integrating @gitlab CI. That blew my
              mind entirely, and that is hard ;)
            </div>
            <div class="developers-item__developer">
              <div class="developers-item__img">
                <img src="@/assets/avatars/2.png" alt="two" />
              </div>
              <div class="developers-item__info">
                <div class="developers-item__name">Michael Friedrich</div>
                <div class="developers-item_position">
                  Developer Evangelist <span>@GitLab</span>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="developers-item">
            <div class="developers-item__info">
              Look at any PR (pull request) in a full coding environment where you
              can edit, build, and test the PR code, by just prepending "gitpod.io#"
              to the PR URL. Super useful for reviewing/testing stuff without having
              to check it out locally!
            </div>
            <div class="developers-item__developer">
              <div class="developers-item__img">
                <img src="@/assets/avatars/3.png" alt="three" />
              </div>
              <div class="developers-item__info">
                <div class="developers-item__name">Julius Volz</div>
                <div class="developers-item_position">
                  Creator <span>@forem</span>and <span>@PrometheusIO</span>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="developers-item">
            <div class="developers-item__info">
              I think I’m in love with @gitpod. It’s such a powerful tool. I’ve
              learned so much in the past week just from stumbling across Github
              repos that interest me and appending “http://gitpod.io/#” to the URL.
              A+ tool all around.
            </div>
            <div class="developers-item__developer">
              <div class="developers-item__img">
                <img src="@/assets/avatars/4.png" alt="four" />
              </div>
              <div class="developers-item__info">
                <div class="developers-item__name">David Ressler</div>
                <div class="developers-item_position">
                  Engineering Manager <span>@instagram</span>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>





    </div>
    <div class="developers-company">
      <div class="developers-company__row">
        <img src="@/assets/company/Frame.png" alt="" class="developers-company__img">
        <img src="@/assets/company/codecamp.png" alt="" class="developers-company__img">
        <img src="@/assets/company/wave.png" alt="" class="developers-company__img">
        <img src="@/assets/company/google.png" alt="" class="developers-company__img">
        <img src="@/assets/company/amazon.png" alt="" class="developers-company__img">
        <img src="@/assets/company/facebook.png" alt="" class="developers-company__img">
        <img src="@/assets/company/uber.png" alt="" class="developers-company__img">
      </div>
      <div class="developers-company__rowtwo">
        <img src="@/assets/company/openai.png" alt="" class="developers-company__img">
        <img src="@/assets/company/intel.png" alt="" class="developers-company__img">
        <img src="@/assets/company/theia.png" alt="" class="developers-company__img">
        <img src="@/assets/company/code.png" alt="" class="developers-company__img">
        <img src="@/assets/company/4geeks.png" alt="" class="developers-company__img">
      </div>
    </div>
  </div>
</template>

<script>
// import SwiperBlock from '@/components/SwiperBlock/SwiperBlock.vue'
import SwiperCore, { Navigation, } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation,]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

};


</script>

<style lang="scss">
@import '@/components/DevelopersBlock/DevelopersBlock.scss';


.mySwiper {



  @include mobile {
    display: none;
  }

  .swiper-wrapper {
    @include desktop-small {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
  }
}

.mySwiper-mobile {
  display: none;

  @include mobile {
    display: block;
  }

}


.swiper-slide {
  width: 384px;

  @include tablet {
    width: 384px;
  }

}

.swiper-container {
  width: 85%;

  @include desktop-small {

    width: 100%;
  }



}

.swiper-wrapper {
  @include mobile {
    padding-left: 45px;
    height: 350px;
  }

}
</style>
