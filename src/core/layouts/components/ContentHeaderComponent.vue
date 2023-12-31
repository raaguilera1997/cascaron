<script lang="ts">
import { defineComponent } from 'vue';

// Global components
// import IconComponent from 'src/core/components/brand/IconComponent.vue';
// import Gravatar from 'src/core/components/gravatar/GravatarLogo.vue';
// import ChangePasswordDialog from 'src/core/modules/external-security/change-password/ui/components/ChangePasswordDialog.vue';
export default defineComponent({
  name: 'ContentHeader',
  // components: { IconComponent, Gravatar },
  props: {
    leftMenuState: {
      type: Boolean,
      required: true,
    },
    userData: {
      required: true,
    },
    modelValue: {
      type: Boolean,
    },
  },
  computed: {
    menuState: {
      get: function (): boolean {
        // @ts-ignore
        return this.leftMenu;
      },
      set: function (val: any): void {
        // @ts-ignore
        this.$emit('update:leftMenuState', val);
      },
    },
  },
  data() {
    //const userData1 = this.userData;

    return {
      search: '',
      drawerLeft: this.modelValue,
      leftMenu: this.leftMenuState,
      //userData1
    };
  },
  methods: {
    changePassword() {
      this.$q.dialog({
        //@ts-ignore
        component: ChangePasswordDialog,
      });
    },
    toggle() {
      // @ts-ignore
      this.leftMenu = !this.leftMenu;
      // @ts-ignore
      this.$emit('update:leftMenuState', this.leftMenu);
    },
    Emitir() {
      this.$emit('update:modelValue', false);
    },
  },
});
</script>
<template>
  <q-toolbar class="q-pb-md q-pt-md text-dark bg-ap-primary">
    <!-- <q-btn round flat @click="toggle" class="onlymovile" >
      <icon-component template name="las la-bars" size="28px"></icon-component>
    </q-btn> -->
    <q-item class="q-px-lg">
      <q-item-section>
        <slot name="section_logo"></slot>
      </q-item-section>
    </q-item>
    <!--<q-input v-model="search" dense rounded outlined class="q-ml-lg" input-class="q-px-sm"
             v-if="$q.screen.gt.sm"
             placeholder="Type to search">
      <template v-slot:append>
        <icon-component template name="las la-search" size="22px" class="q-pr-xs"></icon-component>
      </template>
    </q-input>-->
    <q-space></q-space>

<!--    <div class="row items-center q-gutter-sm q-pr-md">-->
<!--      <q-btn v-if="$q.screen.gt.sm" round flat @click="$q.fullscreen.toggle()">-->
<!--        <q-icon name="las la-expand-arrows-alt" size="26px" class="q-pt-xs"></q-icon>-->
<!--      </q-btn>-->
<!--      <q-btn-dropdown-->
<!--        class="q-pt-sm"-->
<!--        size="17px"-->
<!--        icon="las la-user-circle"-->
<!--        flat-->
<!--        color="dark"-->
<!--        :label="userData.userName "-->
<!--      >-->
<!--          <q-list style="width: 100%">-->
<!--            <q-item class="q-pa-lg bg-dark text-white ">-->
<!--              <q-item-section avatar>-->
<!--                &lt;!&ndash; <q-icon name="las la-user-circle" size="lg" color="grey"></q-icon> &ndash;&gt;-->
<!--                <Gravatar :email="userData.email" />-->
<!--              </q-item-section>-->
<!--              <q-item-section>-->
<!--                <q-item-label lines="1">-->
<!--                  {{ userData.roleName }}-->
<!--                </q-item-label>-->
<!--                <q-item-label-->
<!--                  class="text-grey"-->
<!--                  lines=""-->
<!--                  style="-->
<!--                  word-wrap: break-word;-->
<!--                  white-space: normal;-->
<!--                  text-align: justify-all;-->
<!--                "-->
<!--                >-->
<!--                  {{ userData.email }}-->
<!--                </q-item-label>-->
<!--              </q-item-section>-->
<!--            </q-item>-->
<!--            <q-item clickable v-close-popup class="q-my-sm" @click="changePassword()">-->
<!--              <q-item-section avatar>-->
<!--                <q-icon template name="las la-key"></q-icon>-->
<!--              </q-item-section>-->
<!--              <q-item-section>Change Password</q-item-section>-->
<!--            </q-item>-->
<!--            <q-item-->
<!--              clickable-->
<!--              v-close-popup-->
<!--              class="q-my-sm"-->
<!--              :to="{ name: 'SettingAccountPage' }"-->
<!--            >-->
<!--              <q-item-section avatar>-->
<!--                <icon-component template name="las la-cog"></icon-component>-->
<!--              </q-item-section>-->
<!--              <q-item-section>Setting</q-item-section>-->
<!--            </q-item>-->

<!--            <q-item clickable v-close-popup class="q-my-sm" @click="$emit('logout')">-->
<!--              <q-item-section avatar>-->
<!--                <q-icon template name="las la-sign-out-alt"></q-icon>-->
<!--              </q-item-section>-->
<!--              <q-item-section>Sign out</q-item-section>-->
<!--            </q-item>-->
<!--          </q-list>-->
<!--      </q-btn-dropdown>-->

<!--      &lt;!&ndash;      <q-btn round flat class="q-ml-lg q-mr-sm">&ndash;&gt;-->
<!--      &lt;!&ndash;        &lt;!&ndash; <img&ndash;&gt;-->
<!--      &lt;!&ndash;          src="../../../assets/images/profile/men_profile.png"&ndash;&gt;-->
<!--      &lt;!&ndash;          alt="Profile Image"&ndash;&gt;-->
<!--      &lt;!&ndash;          style="width: 45px"&ndash;&gt;-->
<!--      &lt;!&ndash;        /> &ndash;&gt;&ndash;&gt;-->
<!--      &lt;!&ndash;        <icon-component name="la la-user" size="45px" class="q-pt-xs"></icon-component>&ndash;&gt;-->
<!--      &lt;!&ndash;        <q-menu v-if="userData">&ndash;&gt;-->
<!--      &lt;!&ndash;          <q-list style="width: 300px">&ndash;&gt;-->
<!--      &lt;!&ndash;            <q-item class="q-pa-lg bg-dark text-white">&ndash;&gt;-->
<!--      &lt;!&ndash;              <q-item-section avatar>&ndash;&gt;-->
<!--      &lt;!&ndash;                &lt;!&ndash; <img src="../../../assets/images/profile/men_profile.png" alt="Profile Image" style="width: 45px"> &ndash;&gt;&ndash;&gt;-->
<!--      &lt;!&ndash;                <icon-component&ndash;&gt;-->
<!--      &lt;!&ndash;                  name="la la-user"&ndash;&gt;-->
<!--      &lt;!&ndash;                  size="45px"&ndash;&gt;-->
<!--      &lt;!&ndash;                  class="q-pt-xs"&ndash;&gt;-->
<!--      &lt;!&ndash;                ></icon-component>&ndash;&gt;-->
<!--      &lt;!&ndash;              </q-item-section>&ndash;&gt;-->
<!--      &lt;!&ndash;              <q-item-section>&ndash;&gt;-->
<!--      &lt;!&ndash;                <q-item-label lines="1">&ndash;&gt;-->
<!--      &lt;!&ndash;                  {{ userData.userName }}&ndash;&gt;-->
<!--      &lt;!&ndash;                </q-item-label>&ndash;&gt;-->
<!--      &lt;!&ndash;                <q-item-label&ndash;&gt;-->
<!--      &lt;!&ndash;                  class="text-grey wrap-text"&ndash;&gt;-->
<!--      &lt;!&ndash;                  lines=""&ndash;&gt;-->
<!--      &lt;!&ndash;                  style="overflow-wrap: break-word; font-size: 8px"&ndash;&gt;-->
<!--      &lt;!&ndash;                >&ndash;&gt;-->
<!--      &lt;!&ndash;                  {{ userData.email }}&ndash;&gt;-->
<!--      &lt;!&ndash;                </q-item-label>&ndash;&gt;-->
<!--      &lt;!&ndash;              </q-item-section>&ndash;&gt;-->
<!--      &lt;!&ndash;            </q-item>&ndash;&gt;-->
<!--      &lt;!&ndash;            <q-item clickable v-close-popup class="q-my-sm" @click="changePassword()">&ndash;&gt;-->
<!--      &lt;!&ndash;              <q-item-section avatar>&ndash;&gt;-->
<!--      &lt;!&ndash;                <icon-component template name="las la-key"></icon-component>&ndash;&gt;-->
<!--      &lt;!&ndash;              </q-item-section>&ndash;&gt;-->
<!--      &lt;!&ndash;              <q-item-section>Change Password</q-item-section>&ndash;&gt;-->
<!--      &lt;!&ndash;            </q-item>&ndash;&gt;-->
<!--      &lt;!&ndash;            <q-item&ndash;&gt;-->
<!--      &lt;!&ndash;              clickable&ndash;&gt;-->
<!--      &lt;!&ndash;              v-close-popup&ndash;&gt;-->
<!--      &lt;!&ndash;              class="q-my-sm"&ndash;&gt;-->
<!--      &lt;!&ndash;              :to="{ name: 'SettingAccountPage' }"&ndash;&gt;-->
<!--      &lt;!&ndash;            >&ndash;&gt;-->
<!--      &lt;!&ndash;              <q-item-section avatar>&ndash;&gt;-->
<!--      &lt;!&ndash;                <icon-component template name="las la-cog"></icon-component>&ndash;&gt;-->
<!--      &lt;!&ndash;              </q-item-section>&ndash;&gt;-->
<!--      &lt;!&ndash;              <q-item-section>Setting</q-item-section>&ndash;&gt;-->
<!--      &lt;!&ndash;            </q-item>&ndash;&gt;-->
<!--      &lt;!&ndash;            <q-item clickable v-close-popup class="q-my-sm" @click="$emit('logout')">&ndash;&gt;-->
<!--      &lt;!&ndash;              <q-item-section avatar>&ndash;&gt;-->
<!--      &lt;!&ndash;                <icon-component template name="las la-sign-out-alt"></icon-component>&ndash;&gt;-->
<!--      &lt;!&ndash;              </q-item-section>&ndash;&gt;-->
<!--      &lt;!&ndash;              <q-item-section>Sign out</q-item-section>&ndash;&gt;-->
<!--      &lt;!&ndash;            </q-item>&ndash;&gt;-->
<!--      &lt;!&ndash;          </q-list>&ndash;&gt;-->
<!--      &lt;!&ndash;        </q-menu>&ndash;&gt;-->
<!--      &lt;!&ndash;      </q-btn>&ndash;&gt;-->
<!--    </div>-->
  </q-toolbar>
</template>

<style>
@media (min-width: 0) and (max-width: 700) {
  .onlymovile {
    display: block !important;
  }
}
@media (min-width: 701) {
  .onlymovile {
    display: none !important;
  }
}
.onlymovile {
  /* display: none !important; */
}
</style>
