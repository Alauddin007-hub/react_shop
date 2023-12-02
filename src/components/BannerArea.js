import React from "react";

export const BannerArea = () => {
  return (
    <>
      <section class="banner-area pb-55">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12">
              <div class="tpbanner__wraper mb-20">
                <div class="tpbanner__thumb">
                  <a href="shop-3.html">
                    <div
                      class="tpbanner__big-text tpbanner__big-bg"
                      style={{
                        backgroundImage:
                          "url('assets/img/banner/banner-12.jpg')",
                      }}
                      //   data-background="assets/img/banner/banner-12.jpg"
                    >
                      <div class="tpbanner__big-bg-content">
                        <span class="tpbanner__sub-title mb-20">
                          Top offers
                        </span>
                        <h4 class="tpbanner__title mb-15">
                          pepper <br />
                          Weekend promo
                        </h4>
                        <p>Natural, Rich in Nutrition</p>
                        <div class="tpbanner__btn">
                          <span class="whight-btn">Shop Now</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="row">
                <div class="col-lg-12 col-md-12">
                  <div class="tpbanner__thumb mb-20">
                    <a href="shop-left-sidebar.html">
                      <div
                        class="tpbanner__text tpbanner__bg3"
                        style={{
                          backgroundImage:
                            "url('assets/img/banner/banner-11.jpg')",
                        }}
                        // data-background="assets/img/banner/banner-11.jpg"
                      >
                        <div class="tpbanner__bg__second-content">
                          <span class="tpbanner__sub-title mb-20">
                            Top offers
                          </span>
                          <h4 class="tpbanner__title mb-15">
                            Weekend menu <br />
                            Biscuits Japanese
                          </h4>
                          <p>Everything You Need</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div class="row gx-3">
                <div class="col-lg-6 col-md-6">
                  <div class="tpbanner__thumb mb-20">
                    <a href="shop-right-sidebar.html">
                      <div
                        class="tpbanner__text tpbanner__bg4"
                        style={{
                          backgroundImage:
                            "url('assets/img/banner/banner-10.jpg')",
                        }}
                        // data-background="assets/img/banner/banner-10.jpg"
                      >
                        <h4 class="tpbanner__title mb-20">
                          seafood <br />
                          Fresh & Tasty
                        </h4>
                        <p>Express Delivery</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="tpbanner__thumb mb-20">
                    <a href="shop-right-sidebar.html">
                      <div
                        class="tpbanner__text tpbanner__bg4"
                        style={{
                          backgroundImage:
                            "url('assets/img/banner/banner-13.jpg')",
                        }}
                        // data-background="assets/img/banner/banner-13.jpg"
                      >
                        <h4 class="tpbanner__title mb-20">
                          Fresh Meat <br />
                          Best For Family
                        </h4>
                        <p>Only Sell Online</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
