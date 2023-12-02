import React from "react";

export const ProductArea = () => {
  return (
    <>
      <section className="weekly-product-area whight-product pt-75 pb-75 fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="tpsection mb-20">
                <h4 className="tpsection__sub-title">~ Special Products ~</h4>
                <h4 className="tpsection__title">Weekly Food Offers</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tpnavtab__area pb-40">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className="nav-link active"
                      id="nav-all-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-all"
                      type="button"
                      role="tab"
                      aria-controls="nav-all"
                      aria-selected="true"
                    >
                      All Products
                    </button>
                    <button
                      className="nav-link"
                      id="nav-meat-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-meat"
                      type="button"
                      role="tab"
                      aria-controls="nav-meat"
                      aria-selected="false"
                    >
                      Fresh Meat
                    </button>
                    <button
                      className="nav-link"
                      id="nav-vegetables-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-vegetables"
                      type="button"
                      role="tab"
                      aria-controls="nav-vegetables"
                      aria-selected="false"
                    >
                      Fresh Vegetables
                    </button>
                    <button
                      className="nav-link"
                      id="nav-snacks-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-snacks"
                      type="button"
                      role="tab"
                      aria-controls="nav-snacks"
                      aria-selected="false"
                    >
                      Biscuits Snack
                    </button>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-all"
                    role="tabpanel"
                    aria-labelledby="nav-all-tab"
                    tabindex="0"
                  >
                    <div className="tpproduct__arrow p-relative">
                      <div className="swiper-container tpproduct-active tpslider-bottom p-relative">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="tpproduct p-relative">
                              <div className="tpproduct__thumb p-relative text-center">
                                <a href="#">
                                  <img
                                    src="assets/img/product/products29-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <a
                                  className="tpproduct__thumb-img"
                                  href="shop-details.html"
                                >
                                  <img
                                    src="assets/img/product/products30-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="tpproduct__shopping">
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="wishlist.html"
                                  >
                                    <i className="icon-heart icons"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="#"
                                  >
                                    <i className="icon-layers"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-cart"
                                    href="#"
                                  >
                                    <i className="icon-eye"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="tpproduct__content">
                                <span className="tpproduct__content-weight">
                                  <a href="shop-details.html">Fresh Meat</a>
                                </span>
                                <h4 className="tpproduct__title">
                                  <a href="shop-details-top-.html">
                                    Mangosteen Organic From VietNamese
                                  </a>
                                </h4>
                                <div className="tpproduct__rating mb-5">
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                </div>
                                <div className="tpproduct__price">
                                  <span>$56.00</span>
                                  <del>$19.00</del>
                                </div>
                              </div>
                              <div className="tpproduct__hover-text">
                                <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                  <a className="tp-btn-2" href="cart.html">
                                    Add to cart
                                  </a>
                                </div>
                                <div className="tpproduct__descrip">
                                  <ul>
                                    <li>Type: Organic</li>
                                    <li>MFG: August 4.2021</li>
                                    <li>LIFE: 60 days</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="tpproduct p-relative">
                              <div className="tpproduct__thumb p-relative text-center">
                                <a href="#">
                                  <img
                                    src="assets/img/product/products9-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <a
                                  className="tpproduct__thumb-img"
                                  href="shop-details.html"
                                >
                                  <img
                                    src="assets/img/product/products10-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="tpproduct__shopping">
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="wishlist.html"
                                  >
                                    <i className="icon-heart icons"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="#"
                                  >
                                    <i className="icon-layers"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-cart"
                                    href="#"
                                  >
                                    <i className="icon-eye"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="tpproduct__content">
                                <span className="tpproduct__content-weight">
                                  <a href="shop-details.html">Fresh Meat</a>
                                </span>
                                <h4 className="tpproduct__title">
                                  <a href="shop-details-4.html">
                                    Soda Sparkling Water Maker (Rose Gold)
                                  </a>
                                </h4>
                                <div className="tpproduct__rating mb-5">
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                </div>
                                <div className="tpproduct__price">
                                  <span>$56.00</span>
                                  <del>$19.00</del>
                                </div>
                              </div>
                              <div className="tpproduct__hover-text">
                                <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                  <a className="tp-btn-2" href="cart.html">
                                    Add to cart
                                  </a>
                                </div>
                                <div className="tpproduct__descrip">
                                  <ul>
                                    <li>Type: Organic</li>
                                    <li>MFG: August 4.2021</li>
                                    <li>LIFE: 60 days</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="tpproduct p-relative">
                              <div className="tpproduct__thumb p-relative text-center">
                                <a href="#">
                                  <img
                                    src="assets/img/product/products13-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <a
                                  className="tpproduct__thumb-img"
                                  href="shop-details.html"
                                >
                                  <img
                                    src="assets/img/product/products35-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="tpproduct__shopping">
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="wishlist.html"
                                  >
                                    <i className="icon-heart icons"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="#"
                                  >
                                    <i className="icon-layers"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-cart"
                                    href="#"
                                  >
                                    <i className="icon-eye"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="tpproduct__content">
                                <span className="tpproduct__content-weight">
                                  <a href="shop-details-3.html">Fresh Fruits</a>
                                </span>
                                <h4 className="tpproduct__title">
                                  <a href="shop-details.html">
                                    HOT - Lettuce Fresh Produce Fruit Vegetables
                                  </a>
                                </h4>
                                <div className="tpproduct__rating mb-5">
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                </div>
                                <div className="tpproduct__price">
                                  <span>$56.00</span>
                                  <del>$19.00</del>
                                </div>
                              </div>
                              <div className="tpproduct__hover-text">
                                <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                  <a className="tp-btn-2" href="cart.html">
                                    Add to cart
                                  </a>
                                </div>
                                <div className="tpproduct__descrip">
                                  <ul>
                                    <li>Type: Organic</li>
                                    <li>MFG: August 4.2021</li>
                                    <li>LIFE: 60 days</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="tpproduct p-relative">
                              <div className="tpproduct__thumb p-relative text-center">
                                <a href="#">
                                  <img
                                    src="assets/img/product/products27-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <a
                                  className="tpproduct__thumb-img"
                                  href="shop-details.html"
                                >
                                  <img
                                    src="assets/img/product/products14-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="tpproduct__shopping">
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="wishlist.html"
                                  >
                                    <i className="icon-heart icons"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="#"
                                  >
                                    <i className="icon-layers"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-cart"
                                    href="#"
                                  >
                                    <i className="icon-eye"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="tpproduct__content">
                                <span className="tpproduct__content-weight">
                                  <a href="shop-details-3.html">Fresh Fruits</a>
                                </span>
                                <h4 className="tpproduct__title">
                                  <a href="shop-details-grid.html">
                                    Pure Irish Organic Beef Quarter Pounder
                                    Burgers
                                  </a>
                                </h4>
                                <div className="tpproduct__rating mb-5">
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                </div>
                                <div className="tpproduct__price">
                                  <span>$56.00</span>
                                  <del>$19.00</del>
                                </div>
                              </div>
                              <div className="tpproduct__hover-text">
                                <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                  <a className="tp-btn-2" href="cart.html">
                                    Add to cart
                                  </a>
                                </div>
                                <div className="tpproduct__descrip">
                                  <ul>
                                    <li>Type: Organic</li>
                                    <li>MFG: August 4.2021</li>
                                    <li>LIFE: 60 days</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="tpproduct p-relative">
                              <div className="tpproduct__thumb p-relative text-center">
                                <a href="#">
                                  <img
                                    src="assets/img/product/products15-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <a
                                  className="tpproduct__thumb-img"
                                  href="shop-details.html"
                                >
                                  <img
                                    src="assets/img/product/products32-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="tpproduct__shopping">
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="wishlist.html"
                                  >
                                    <i className="icon-heart icons"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="#"
                                  >
                                    <i className="icon-layers"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-cart"
                                    href="#"
                                  >
                                    <i className="icon-eye"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="tpproduct__content">
                                <span className="tpproduct__content-weight">
                                  <a href="shop-details-3.html">Vagetables</a>
                                </span>
                                <h4 className="tpproduct__title">
                                  <a href="shop-details-3.html">
                                    Ginger Fresh, Whole, Organic - 250gram
                                  </a>
                                </h4>
                                <div className="tpproduct__rating mb-5">
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                </div>
                                <div className="tpproduct__price">
                                  <span>$56.00</span>
                                  <del>$19.00</del>
                                </div>
                              </div>
                              <div className="tpproduct__hover-text">
                                <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                  <a className="tp-btn-2" href="cart.html">
                                    Add to cart
                                  </a>
                                </div>
                                <div className="tpproduct__descrip">
                                  <ul>
                                    <li>Type: Organic</li>
                                    <li>MFG: August 4.2021</li>
                                    <li>LIFE: 60 days</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="tpproduct p-relative">
                              <div className="tpproduct__thumb p-relative text-center">
                                <a href="#">
                                  <img
                                    src="assets/img/product/products12-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <a
                                  className="tpproduct__thumb-img"
                                  href="shop-details.html"
                                >
                                  <img
                                    src="assets/img/product/products28-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="tpproduct__shopping">
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="wishlist.html"
                                  >
                                    <i className="icon-heart icons"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="#"
                                  >
                                    <i className="icon-layers"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-cart"
                                    href="#"
                                  >
                                    <i className="icon-eye"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="tpproduct__content">
                                <span className="tpproduct__content-weight">
                                  <a href="shop-details-3.html">Fresh Fruits</a>
                                </span>
                                <h4 className="tpproduct__title">
                                  <a href="shop-details-grid.html">
                                    Laffy Taffy Laff Bites Gone Bananas - 4
                                    Packs
                                  </a>
                                </h4>
                                <div className="tpproduct__rating mb-5">
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                </div>
                                <div className="tpproduct__price">
                                  <span>$56.00</span>
                                  <del>$19.00</del>
                                </div>
                              </div>
                              <div className="tpproduct__hover-text">
                                <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                  <a className="tp-btn-2" href="cart.html">
                                    Add to cart
                                  </a>
                                </div>
                                <div className="tpproduct__descrip">
                                  <ul>
                                    <li>Type: Organic</li>
                                    <li>MFG: August 4.2021</li>
                                    <li>LIFE: 60 days</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tpproduct-btn">
                        <div className="tpprduct-arrow tpproduct-btn__prv">
                          <a href="#">
                            <i className="icon-chevron-left"></i>
                          </a>
                        </div>
                        <div className="tpprduct-arrow tpproduct-btn__nxt">
                          <a href="#">
                            <i className="icon-chevron-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-meat"
                    role="tabpanel"
                    aria-labelledby="nav-meat-tab"
                    tabindex="0"
                  >
                    <div className="tpproduct__arrow p-relative">
                      <div className="swiper-container tpproduct-active tpslider-bottom p-relative">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="tpproduct p-relative">
                              <div className="tpproduct__thumb p-relative text-center">
                                <a href="#">
                                  <img
                                    src="assets/img/product/products30-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <a
                                  className="tpproduct__thumb-img"
                                  href="shop-details.html"
                                >
                                  <img
                                    src="assets/img/product/products29-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="tpproduct__shopping">
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="wishlist.html"
                                  >
                                    <i className="icon-heart icons"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="#"
                                  >
                                    <i className="icon-layers"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-cart"
                                    href="#"
                                  >
                                    <i className="icon-eye"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="tpproduct__content">
                                <span className="tpproduct__content-weight">
                                  <a href="shop-details.html">Fresh Meat</a>
                                </span>
                                <h4 className="tpproduct__title">
                                  <a href="shop-details-top-.html">
                                    Mangosteen Organic From VietNamese
                                  </a>
                                </h4>
                                <div className="tpproduct__rating mb-5">
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                </div>
                                <div className="tpproduct__price">
                                  <span>$56.00</span>
                                  <del>$19.00</del>
                                </div>
                              </div>
                              <div className="tpproduct__hover-text">
                                <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                  <a className="tp-btn-2" href="cart.html">
                                    Add to cart
                                  </a>
                                </div>
                                <div className="tpproduct__descrip">
                                  <ul>
                                    <li>Type: Organic</li>
                                    <li>MFG: August 4.2021</li>
                                    <li>LIFE: 60 days</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="tpproduct p-relative">
                              <div className="tpproduct__thumb p-relative text-center">
                                <a href="#">
                                  <img
                                    src="assets/img/product/products10-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <a
                                  className="tpproduct__thumb-img"
                                  href="shop-details.html"
                                >
                                  <img
                                    src="assets/img/product/products9-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="tpproduct__shopping">
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="wishlist.html"
                                  >
                                    <i className="icon-heart icons"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="#"
                                  >
                                    <i className="icon-layers"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-cart"
                                    href="#"
                                  >
                                    <i className="icon-eye"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="tpproduct__content">
                                <span className="tpproduct__content-weight">
                                  <a href="shop-details.html">Fresh Meat</a>
                                </span>
                                <h4 className="tpproduct__title">
                                  <a href="shop-details-4.html">
                                    Soda Sparkling Water Maker (Rose Gold)
                                  </a>
                                </h4>
                                <div className="tpproduct__rating mb-5">
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                </div>
                                <div className="tpproduct__price">
                                  <span>$56.00</span>
                                  <del>$19.00</del>
                                </div>
                              </div>
                              <div className="tpproduct__hover-text">
                                <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                  <a className="tp-btn-2" href="cart.html">
                                    Add to cart
                                  </a>
                                </div>
                                <div className="tpproduct__descrip">
                                  <ul>
                                    <li>Type: Organic</li>
                                    <li>MFG: August 4.2021</li>
                                    <li>LIFE: 60 days</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="tpproduct p-relative">
                              <div className="tpproduct__thumb p-relative text-center">
                                <a href="#">
                                  <img
                                    src="assets/img/product/products15-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <a
                                  className="tpproduct__thumb-img"
                                  href="shop-details.html"
                                >
                                  <img
                                    src="assets/img/product/products32-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="tpproduct__shopping">
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="wishlist.html"
                                  >
                                    <i className="icon-heart icons"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="#"
                                  >
                                    <i className="icon-layers"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-cart"
                                    href="#"
                                  >
                                    <i className="icon-eye"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="tpproduct__content">
                                <span className="tpproduct__content-weight">
                                  <a href="shop-details-3.html">Fresh Fruits</a>
                                </span>
                                <h4 className="tpproduct__title">
                                  <a href="shop-details-4.html">
                                    Soda Sparkling Water Maker (Rose Gold)
                                  </a>
                                </h4>
                                <div className="tpproduct__rating mb-5">
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                </div>
                                <div className="tpproduct__price">
                                  <span>$56.00</span>
                                  <del>$19.00</del>
                                </div>
                              </div>
                              <div className="tpproduct__hover-text">
                                <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                  <a className="tp-btn-2" href="cart.html">
                                    Add to cart
                                  </a>
                                </div>
                                <div className="tpproduct__descrip">
                                  <ul>
                                    <li>Type: Organic</li>
                                    <li>MFG: August 4.2021</li>
                                    <li>LIFE: 60 days</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="tpproduct p-relative">
                              <div className="tpproduct__thumb p-relative text-center">
                                <a href="#">
                                  <img
                                    src="assets/img/product/products29-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <a
                                  className="tpproduct__thumb-img"
                                  href="shop-details.html"
                                >
                                  <img
                                    src="assets/img/product/products30-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="tpproduct__shopping">
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="wishlist.html"
                                  >
                                    <i className="icon-heart icons"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="#"
                                  >
                                    <i className="icon-layers"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-cart"
                                    href="#"
                                  >
                                    <i className="icon-eye"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="tpproduct__content">
                                <span className="tpproduct__content-weight">
                                  <a href="shop-details.html">Fresh Meat</a>
                                </span>
                                <h4 className="tpproduct__title">
                                  <a href="shop-details-top-.html">
                                    Mangosteen Organic From VietNamese
                                  </a>
                                </h4>
                                <div className="tpproduct__rating mb-5">
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                </div>
                                <div className="tpproduct__price">
                                  <span>$56.00</span>
                                  <del>$19.00</del>
                                </div>
                              </div>
                              <div className="tpproduct__hover-text">
                                <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                  <a className="tp-btn-2" href="cart.html">
                                    Add to cart
                                  </a>
                                </div>
                                <div className="tpproduct__descrip">
                                  <ul>
                                    <li>Type: Organic</li>
                                    <li>MFG: August 4.2021</li>
                                    <li>LIFE: 60 days</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="tpproduct p-relative">
                              <div className="tpproduct__thumb p-relative text-center">
                                <a href="#">
                                  <img
                                    src="assets/img/product/products9-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <a
                                  className="tpproduct__thumb-img"
                                  href="shop-details.html"
                                >
                                  <img
                                    src="assets/img/product/products10-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="tpproduct__shopping">
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="wishlist.html"
                                  >
                                    <i className="icon-heart icons"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="#"
                                  >
                                    <i className="icon-layers"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-cart"
                                    href="#"
                                  >
                                    <i className="icon-eye"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="tpproduct__content">
                                <span className="tpproduct__content-weight">
                                  <a href="shop-details.html">Fresh Meat</a>
                                </span>
                                <h4 className="tpproduct__title">
                                  <a href="shop-details-4.html">
                                    Soda Sparkling Water Maker (Rose Gold)
                                  </a>
                                </h4>
                                <div className="tpproduct__rating mb-5">
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                </div>
                                <div className="tpproduct__price">
                                  <span>$56.00</span>
                                  <del>$19.00</del>
                                </div>
                              </div>
                              <div className="tpproduct__hover-text">
                                <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                  <a className="tp-btn-2" href="cart.html">
                                    Add to cart
                                  </a>
                                </div>
                                <div className="tpproduct__descrip">
                                  <ul>
                                    <li>Type: Organic</li>
                                    <li>MFG: August 4.2021</li>
                                    <li>LIFE: 60 days</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="tpproduct p-relative">
                              <div className="tpproduct__thumb p-relative text-center">
                                <a href="#">
                                  <img
                                    src="assets/img/product/products26-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <a
                                  className="tpproduct__thumb-img"
                                  href="shop-details.html"
                                >
                                  <img
                                    src="assets/img/product/products9-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="tpproduct__shopping">
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="wishlist.html"
                                  >
                                    <i className="icon-heart icons"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="#"
                                  >
                                    <i className="icon-layers"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-cart"
                                    href="#"
                                  >
                                    <i className="icon-eye"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="tpproduct__content">
                                <span className="tpproduct__content-weight">
                                  <a href="shop-details-3.html">Fresh Fruits</a>
                                  ,<a href="shop-details-3.html">Vagetables</a>
                                </span>
                                <h4 className="tpproduct__title">
                                  <a href="shop-details-3.html">
                                    Ginger Fresh, Whole, Organic - 250gram
                                  </a>
                                </h4>
                                <div className="tpproduct__rating mb-5">
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                </div>
                                <div className="tpproduct__price">
                                  <span>$56.00</span>
                                  <del>$19.00</del>
                                </div>
                              </div>
                              <div className="tpproduct__hover-text">
                                <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                  <a className="tp-btn-2" href="cart.html">
                                    Add to cart
                                  </a>
                                </div>
                                <div className="tpproduct__descrip">
                                  <ul>
                                    <li>Type: Organic</li>
                                    <li>MFG: August 4.2021</li>
                                    <li>LIFE: 60 days</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tpproduct-btn">
                        <div className="tpprduct-arrow tpproduct-btn__prv">
                          <a href="#">
                            <i className="icon-chevron-left"></i>
                          </a>
                        </div>
                        <div className="tpprduct-arrow tpproduct-btn__nxt">
                          <a href="#">
                            <i className="icon-chevron-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-vegetables"
                    role="tabpanel"
                    aria-labelledby="nav-vegetables-tab"
                    tabindex="0"
                  >
                    <div className="tpproduct__arrow p-relative">
                      <div className="swiper-container tpproduct-active tpslider-bottom p-relative">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="tpproduct p-relative">
                              <div className="tpproduct__thumb p-relative text-center">
                                <a href="#">
                                  <img
                                    src="assets/img/product/products21-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <a
                                  className="tpproduct__thumb-img"
                                  href="shop-details-grid.html"
                                >
                                  <img
                                    src="assets/img/product/products1-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="tpproduct__shopping">
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="wishlist.html"
                                  >
                                    <i className="icon-heart icons"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="#"
                                  >
                                    <i className="icon-layers"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-cart"
                                    href="#"
                                  >
                                    <i className="icon-eye"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="tpproduct__content">
                                <span className="tpproduct__content-weight">
                                  <a href="shop-details-3.html">Fresh Fruits</a>
                                  ,<a href="shop-details-3.html">Vagetables</a>
                                </span>
                                <h4 className="tpproduct__title">
                                  <a href="shop-details-top-.html">
                                    Mangosteen Organic From VietNamese
                                  </a>
                                </h4>
                                <div className="tpproduct__rating mb-5">
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                </div>
                                <div className="tpproduct__price">
                                  <span>$56.00</span>
                                  <del>$19.00</del>
                                </div>
                              </div>
                              <div className="tpproduct__hover-text">
                                <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                  <a className="tp-btn-2" href="cart.html">
                                    Add to cart
                                  </a>
                                </div>
                                <div className="tpproduct__descrip">
                                  <ul>
                                    <li>Type: Organic</li>
                                    <li>MFG: August 4.2021</li>
                                    <li>LIFE: 60 days</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="tpproduct p-relative">
                              <div className="tpproduct__thumb p-relative text-center">
                                <a href="#">
                                  <img
                                    src="assets/img/product/products22-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <a
                                  className="tpproduct__thumb-img"
                                  href="shop-details-grid.html"
                                >
                                  <img
                                    src="assets/img/product/products11-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="tpproduct__shopping">
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="wishlist.html"
                                  >
                                    <i className="icon-heart icons"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="#"
                                  >
                                    <i className="icon-layers"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-cart"
                                    href="#"
                                  >
                                    <i className="icon-eye"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="tpproduct__content">
                                <span className="tpproduct__content-weight">
                                  <a href="shop-details-3.html">Fresh Fruits</a>
                                </span>
                                <h4 className="tpproduct__title">
                                  <a href="shop-details-4.html">
                                    Soda Sparkling Water Maker (Rose Gold)
                                  </a>
                                </h4>
                                <div className="tpproduct__rating mb-5">
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                </div>
                                <div className="tpproduct__price">
                                  <span>$56.00</span>
                                  <del>$19.00</del>
                                </div>
                              </div>
                              <div className="tpproduct__hover-text">
                                <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                  <a className="tp-btn-2" href="cart.html">
                                    Add to cart
                                  </a>
                                </div>
                                <div className="tpproduct__descrip">
                                  <ul>
                                    <li>Type: Organic</li>
                                    <li>MFG: August 4.2021</li>
                                    <li>LIFE: 60 days</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="tpproduct p-relative">
                              <div className="tpproduct__thumb p-relative text-center">
                                <a href="#">
                                  <img
                                    src="assets/img/product/products4-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <a
                                  className="tpproduct__thumb-img"
                                  href="shop-details-grid.html"
                                >
                                  <img
                                    src="assets/img/product/products23-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="tpproduct__shopping">
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="wishlist.html"
                                  >
                                    <i className="icon-heart icons"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="#"
                                  >
                                    <i className="icon-layers"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-cart"
                                    href="#"
                                  >
                                    <i className="icon-eye"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="tpproduct__content">
                                <span className="tpproduct__content-weight">
                                  <a href="shop-details-3.html">Vagetables</a>
                                </span>
                                <h4 className="tpproduct__title">
                                  <a href="shop-details.html">
                                    HOT - Lettuce Fresh Produce Fruit Vegetables
                                  </a>
                                </h4>
                                <div className="tpproduct__rating mb-5">
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                </div>
                                <div className="tpproduct__price">
                                  <span>$56.00</span>
                                  <del>$19.00</del>
                                </div>
                              </div>
                              <div className="tpproduct__hover-text">
                                <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                  <a className="tp-btn-2" href="cart.html">
                                    Add to cart
                                  </a>
                                </div>
                                <div className="tpproduct__descrip">
                                  <ul>
                                    <li>Type: Organic</li>
                                    <li>MFG: August 4.2021</li>
                                    <li>LIFE: 60 days</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="tpproduct p-relative">
                              <div className="tpproduct__thumb p-relative text-center">
                                <a href="#">
                                  <img
                                    src="assets/img/product/products27-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <a
                                  className="tpproduct__thumb-img"
                                  href="shop-details.html"
                                >
                                  <img
                                    src="assets/img/product/products14-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="tpproduct__shopping">
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="wishlist.html"
                                  >
                                    <i className="icon-heart icons"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="#"
                                  >
                                    <i className="icon-layers"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-cart"
                                    href="#"
                                  >
                                    <i className="icon-eye"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="tpproduct__content">
                                <span className="tpproduct__content-weight">
                                  <a href="shop-details-3.html">Fresh Fruits</a>
                                </span>
                                <h4 className="tpproduct__title">
                                  <a href="shop-details-grid.html">
                                    Pure Irish Organic Beef Quarter Pounder
                                    Burgers
                                  </a>
                                </h4>
                                <div className="tpproduct__rating mb-5">
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                </div>
                                <div className="tpproduct__price">
                                  <span>$56.00</span>
                                  <del>$19.00</del>
                                </div>
                              </div>
                              <div className="tpproduct__hover-text">
                                <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                  <a className="tp-btn-2" href="cart.html">
                                    Add to cart
                                  </a>
                                </div>
                                <div className="tpproduct__descrip">
                                  <ul>
                                    <li>Type: Organic</li>
                                    <li>MFG: August 4.2021</li>
                                    <li>LIFE: 60 days</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="tpproduct p-relative">
                              <div className="tpproduct__thumb p-relative text-center">
                                <a href="#">
                                  <img
                                    src="assets/img/product/products16-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <a
                                  className="tpproduct__thumb-img"
                                  href="shop-details-grid.html"
                                >
                                  <img
                                    src="assets/img/product/products11-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="tpproduct__shopping">
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="wishlist.html"
                                  >
                                    <i className="icon-heart icons"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="#"
                                  >
                                    <i className="icon-layers"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-cart"
                                    href="#"
                                  >
                                    <i className="icon-eye"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="tpproduct__content">
                                <span className="tpproduct__content-weight">
                                  <a href="shop-details-3.html">Fresh Fruits</a>
                                  ,<a href="shop-details-3.html">Vagetables</a>
                                </span>
                                <h4 className="tpproduct__title">
                                  <a href="shop-details-3.html">
                                    Ginger Fresh, Whole, Organic - 250gram
                                  </a>
                                </h4>
                                <div className="tpproduct__rating mb-5">
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                </div>
                                <div className="tpproduct__price">
                                  <span>$56.00</span>
                                  <del>$19.00</del>
                                </div>
                              </div>
                              <div className="tpproduct__hover-text">
                                <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                  <a className="tp-btn-2" href="cart.html">
                                    Add to cart
                                  </a>
                                </div>
                                <div className="tpproduct__descrip">
                                  <ul>
                                    <li>Type: Organic</li>
                                    <li>MFG: August 4.2021</li>
                                    <li>LIFE: 60 days</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="tpproduct p-relative">
                              <div className="tpproduct__thumb p-relative text-center">
                                <a href="#">
                                  <img
                                    src="assets/img/product/products17-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <a
                                  className="tpproduct__thumb-img"
                                  href="shop-details-grid.html"
                                >
                                  <img
                                    src="assets/img/product/products37-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="tpproduct__shopping">
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="wishlist.html"
                                  >
                                    <i className="icon-heart icons"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="#"
                                  >
                                    <i className="icon-layers"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-cart"
                                    href="#"
                                  >
                                    <i className="icon-eye"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="tpproduct__content">
                                <span className="tpproduct__content-weight">
                                  <a href="shop-details-3.html">Fresh Fruits</a>
                                </span>
                                <h4 className="tpproduct__title">
                                  <a href="shop-details-grid.html">
                                    Laffy Taffy Laff Bites Gone Bananas - 4
                                    Packs
                                  </a>
                                </h4>
                                <div className="tpproduct__rating mb-5">
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                </div>
                                <div className="tpproduct__price">
                                  <span>$56.00</span>
                                  <del>$19.00</del>
                                </div>
                              </div>
                              <div className="tpproduct__hover-text">
                                <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                  <a className="tp-btn-2" href="cart.html">
                                    Add to cart
                                  </a>
                                </div>
                                <div className="tpproduct__descrip">
                                  <ul>
                                    <li>Type: Organic</li>
                                    <li>MFG: August 4.2021</li>
                                    <li>LIFE: 60 days</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tpproduct-btn">
                        <div className="tpprduct-arrow tpproduct-btn__prv">
                          <a href="#">
                            <i className="icon-chevron-left"></i>
                          </a>
                        </div>
                        <div className="tpprduct-arrow tpproduct-btn__nxt">
                          <a href="#">
                            <i className="icon-chevron-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-snacks"
                    role="tabpanel"
                    aria-labelledby="nav-snacks-tab"
                    tabindex="0"
                  >
                    <div className="tpproduct__arrow p-relative">
                      <div className="swiper-container tpproduct-active tpslider-bottom p-relative">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="tpproduct p-relative">
                              <div className="tpproduct__thumb p-relative text-center">
                                <a href="#">
                                  <img
                                    src="assets/img/product/products21-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <a
                                  className="tpproduct__thumb-img"
                                  href="shop-details-grid.html"
                                >
                                  <img
                                    src="assets/img/product/products1-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="tpproduct__shopping">
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="wishlist.html"
                                  >
                                    <i className="icon-heart icons"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="#"
                                  >
                                    <i className="icon-layers"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-cart"
                                    href="#"
                                  >
                                    <i className="icon-eye"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="tpproduct__content">
                                <span className="tpproduct__content-weight">
                                  <a href="shop-details-3.html">Fresh Fruits</a>
                                  ,<a href="shop-details-3.html">Vagetables</a>
                                </span>
                                <h4 className="tpproduct__title">
                                  <a href="shop-details-top-.html">
                                    Mangosteen Organic From VietNamese
                                  </a>
                                </h4>
                                <div className="tpproduct__rating mb-5">
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                </div>
                                <div className="tpproduct__price">
                                  <span>$56.00</span>
                                  <del>$19.00</del>
                                </div>
                              </div>
                              <div className="tpproduct__hover-text">
                                <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                  <a className="tp-btn-2" href="cart.html">
                                    Add to cart
                                  </a>
                                </div>
                                <div className="tpproduct__descrip">
                                  <ul>
                                    <li>Type: Organic</li>
                                    <li>MFG: August 4.2021</li>
                                    <li>LIFE: 60 days</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="tpproduct p-relative">
                              <div className="tpproduct__thumb p-relative text-center">
                                <a href="#">
                                  <img
                                    src="assets/img/product/products13-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <a
                                  className="tpproduct__thumb-img"
                                  href="shop-details.html"
                                >
                                  <img
                                    src="assets/img/product/products35-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="tpproduct__shopping">
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="wishlist.html"
                                  >
                                    <i className="icon-heart icons"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="#"
                                  >
                                    <i className="icon-layers"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-cart"
                                    href="#"
                                  >
                                    <i className="icon-eye"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="tpproduct__content">
                                <span className="tpproduct__content-weight">
                                  <a href="shop-details-3.html">Fresh Fruits</a>
                                </span>
                                <h4 className="tpproduct__title">
                                  <a href="shop-details.html">
                                    HOT - Lettuce Fresh Produce Fruit Vegetables
                                  </a>
                                </h4>
                                <div className="tpproduct__rating mb-5">
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                </div>
                                <div className="tpproduct__price">
                                  <span>$56.00</span>
                                  <del>$19.00</del>
                                </div>
                              </div>
                              <div className="tpproduct__hover-text">
                                <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                  <a className="tp-btn-2" href="cart.html">
                                    Add to cart
                                  </a>
                                </div>
                                <div className="tpproduct__descrip">
                                  <ul>
                                    <li>Type: Organic</li>
                                    <li>MFG: August 4.2021</li>
                                    <li>LIFE: 60 days</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="tpproduct p-relative">
                              <div className="tpproduct__thumb p-relative text-center">
                                <a href="#">
                                  <img
                                    src="assets/img/product/products27-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <a
                                  className="tpproduct__thumb-img"
                                  href="shop-details.html"
                                >
                                  <img
                                    src="assets/img/product/products14-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="tpproduct__shopping">
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="wishlist.html"
                                  >
                                    <i className="icon-heart icons"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="#"
                                  >
                                    <i className="icon-layers"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-cart"
                                    href="#"
                                  >
                                    <i className="icon-eye"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="tpproduct__content">
                                <span className="tpproduct__content-weight">
                                  <a href="shop-details-3.html">Fresh Fruits</a>
                                </span>
                                <h4 className="tpproduct__title">
                                  <a href="shop-details-grid.html">
                                    Pure Irish Organic Beef Quarter Pounder
                                    Burgers
                                  </a>
                                </h4>
                                <div className="tpproduct__rating mb-5">
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                </div>
                                <div className="tpproduct__price">
                                  <span>$56.00</span>
                                  <del>$19.00</del>
                                </div>
                              </div>
                              <div className="tpproduct__hover-text">
                                <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                  <a className="tp-btn-2" href="cart.html">
                                    Add to cart
                                  </a>
                                </div>
                                <div className="tpproduct__descrip">
                                  <ul>
                                    <li>Type: Organic</li>
                                    <li>MFG: August 4.2021</li>
                                    <li>LIFE: 60 days</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="tpproduct p-relative">
                              <div className="tpproduct__thumb p-relative text-center">
                                <a href="#">
                                  <img
                                    src="assets/img/product/products15-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <a
                                  className="tpproduct__thumb-img"
                                  href="shop-details.html"
                                >
                                  <img
                                    src="assets/img/product/products32-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="tpproduct__shopping">
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="wishlist.html"
                                  >
                                    <i className="icon-heart icons"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="#"
                                  >
                                    <i className="icon-layers"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-cart"
                                    href="#"
                                  >
                                    <i className="icon-eye"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="tpproduct__content">
                                <span className="tpproduct__content-weight">
                                  <a href="shop-details-3.html">Vagetables</a>
                                </span>
                                <h4 className="tpproduct__title">
                                  <a href="shop-details-3.html">
                                    Ginger Fresh, Whole, Organic - 250gram
                                  </a>
                                </h4>
                                <div className="tpproduct__rating mb-5">
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                </div>
                                <div className="tpproduct__price">
                                  <span>$56.00</span>
                                  <del>$19.00</del>
                                </div>
                              </div>
                              <div className="tpproduct__hover-text">
                                <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                  <a className="tp-btn-2" href="cart.html">
                                    Add to cart
                                  </a>
                                </div>
                                <div className="tpproduct__descrip">
                                  <ul>
                                    <li>Type: Organic</li>
                                    <li>MFG: August 4.2021</li>
                                    <li>LIFE: 60 days</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="tpproduct p-relative">
                              <div className="tpproduct__thumb p-relative text-center">
                                <a href="#">
                                  <img
                                    src="assets/img/product/products12-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <a
                                  className="tpproduct__thumb-img"
                                  href="shop-details.html"
                                >
                                  <img
                                    src="assets/img/product/products28-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="tpproduct__shopping">
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="wishlist.html"
                                  >
                                    <i className="icon-heart icons"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="#"
                                  >
                                    <i className="icon-layers"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-cart"
                                    href="#"
                                  >
                                    <i className="icon-eye"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="tpproduct__content">
                                <span className="tpproduct__content-weight">
                                  <a href="shop-details-3.html">Fresh Fruits</a>
                                </span>
                                <h4 className="tpproduct__title">
                                  <a href="shop-details-grid.html">
                                    Laffy Taffy Laff Bites Gone Bananas - 4
                                    Packs
                                  </a>
                                </h4>
                                <div className="tpproduct__rating mb-5">
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                </div>
                                <div className="tpproduct__price">
                                  <span>$56.00</span>
                                  <del>$19.00</del>
                                </div>
                              </div>
                              <div className="tpproduct__hover-text">
                                <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                  <a className="tp-btn-2" href="cart.html">
                                    Add to cart
                                  </a>
                                </div>
                                <div className="tpproduct__descrip">
                                  <ul>
                                    <li>Type: Organic</li>
                                    <li>MFG: August 4.2021</li>
                                    <li>LIFE: 60 days</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="tpproduct p-relative">
                              <div className="tpproduct__thumb p-relative text-center">
                                <a href="#">
                                  <img
                                    src="assets/img/product/products17-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <a
                                  className="tpproduct__thumb-img"
                                  href="shop-details-grid.html"
                                >
                                  <img
                                    src="assets/img/product/products37-min.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="tpproduct__shopping">
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="wishlist.html"
                                  >
                                    <i className="icon-heart icons"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-wishlist"
                                    href="#"
                                  >
                                    <i className="icon-layers"></i>
                                  </a>
                                  <a
                                    className="tpproduct__shopping-cart"
                                    href="#"
                                  >
                                    <i className="icon-eye"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="tpproduct__content">
                                <span className="tpproduct__content-weight">
                                  <a href="shop-details-3.html">Fresh Fruits</a>
                                </span>
                                <h4 className="tpproduct__title">
                                  <a href="shop-details-grid.html">
                                    Laffy Taffy Laff Bites Gone Bananas - 4
                                    Packs
                                  </a>
                                </h4>
                                <div className="tpproduct__rating mb-5">
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icon-star_outline1"></i>
                                  </a>
                                </div>
                                <div className="tpproduct__price">
                                  <span>$56.00</span>
                                  <del>$19.00</del>
                                </div>
                              </div>
                              <div className="tpproduct__hover-text">
                                <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                  <a className="tp-btn-2" href="cart.html">
                                    Add to cart
                                  </a>
                                </div>
                                <div className="tpproduct__descrip">
                                  <ul>
                                    <li>Type: Organic</li>
                                    <li>MFG: August 4.2021</li>
                                    <li>LIFE: 60 days</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tpproduct-btn">
                        <div className="tpprduct-arrow tpproduct-btn__prv">
                          <a href="#">
                            <i className="icon-chevron-left"></i>
                          </a>
                        </div>
                        <div className="tpprduct-arrow tpproduct-btn__nxt">
                          <a href="#">
                            <i className="icon-chevron-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tpproduct__all-item text-center">
                <span>
                  Discover thousands of other quality products.
                  <a href="shop-2.html">
                    Shop All Products <i className="icon-chevrons-right"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
