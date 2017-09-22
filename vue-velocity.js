import Velocity from 'velocity-animate';
import Q from 'q';

const VueVelocity = {
  install(Vue) {
    Vue.mixin({
      data() {
        return {
          velocityIsAnimated: false,
          velocityRefsStyles: {},
        };
      },
      methods: {
        velocityOpacity(eleName, duration, opacity, _delay) {
          this.velocityCacheStyle(eleName, 'opacity');

          const that = this;
          const delay = _delay || 0;
          const dfd = Q.defer();
          Velocity(
            that.$refs[eleName],
            { opacity },
            {
              duration,
              delay,
              complete() {
                if (!that.velocityIsAnimated) {
                  dfd.reject();
                } else {
                  dfd.resolve();
                }
              },
            },
          );
          return dfd.promise;
        },
        velocityTop(eleName, duration, top, _delay) {
          this.velocityCacheStyle(eleName, 'top');

          const that = this;
          const delay = _delay || 0;
          const dfd = Q.defer();
          Velocity(
            that.$refs[eleName],
            { top },
            {
              duration,
              delay,
              complete() {
                if (!that.velocityIsAnimated) {
                  dfd.reject();
                } else {
                  dfd.resolve();
                }
              },
            },
          );
          return dfd.promise;
        },
        velocityPaddingTop(eleName, duration, paddingTop, _delay) {
          this.velocityCacheStyle(eleName, 'paddingTop');

          const that = this;
          const delay = _delay || 0;
          const dfd = Q.defer();
          Velocity(
            that.$refs[eleName],
            { paddingTop },
            {
              duration,
              delay,
              complete() {
                if (!that.velocityIsAnimated) {
                  dfd.reject();
                } else {
                  dfd.resolve();
                }
              },
            },
          );
          return dfd.promise;
        },
        velocityLeft(eleName, duration, left, _delay) {
          this.velocityCacheStyle(eleName, 'left');

          const that = this;
          const delay = _delay || 0;
          const dfd = Q.defer();
          Velocity(
            that.$refs[eleName],
            { left },
            {
              duration,
              delay,
              complete() {
                if (!that.velocityIsAnimated) {
                  dfd.reject();
                } else {
                  dfd.resolve();
                }
              },
            },
          );
          return dfd.promise;
        },
        velocityRight(eleName, duration, right, _delay) {
          this.velocityCacheStyle(eleName, 'right');

          const that = this;
          const delay = _delay || 0;
          const dfd = Q.defer();
          Velocity(
            that.$refs[eleName],
            { right },
            {
              duration,
              delay,
              complete() {
                if (!that.velocityIsAnimated) {
                  dfd.reject();
                } else {
                  dfd.resolve();
                }
              },
            },
          );
          return dfd.promise;
        },
        velocityCacheStyle(eleName, property) {
          if (!this.velocityRefsStyles[eleName]) {
            this.velocityRefsStyles[eleName] = {};
          }
          if (!this.velocityRefsStyles[eleName][property]) {
            this.velocityRefsStyles[eleName][property] = this.$refs[eleName].style[property];
          }
        },
        velocityRestoreStyle() {
          Object.keys(this.$refs).forEach((eleName) => {
            const style = this.velocityRefsStyles[eleName];
            if (style) {
              Object.keys(style).forEach((property) => {
                this.$refs[eleName].style[property] = style[property];
              });
            }
          });
        },
        velocityDoAnimated() {
          this.velocityIsAnimated = true;
        },
        velocityResetAnimated() {
          if (this.velocityIsAnimated) {
            this.velocityIsAnimated = false;
            this.velocityRestoreStyle();
          }
        },
      },
    });
  },
};

export default VueVelocity;
