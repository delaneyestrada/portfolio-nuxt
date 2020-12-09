/* eslint-disable */

/*<![CDATA[*/
export function initShopify() {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }

    function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: 'portfolio-site-demo.myshopify.com',
            storefrontAccessToken: 'cf1ee7afe860cd55e2a04cc92de0d455',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('collection', {
                id: '237083164857',
                node: document.getElementById('collection-component-1605831560423'),
                moneyFormat: '%24%7B%7Bamount%7D%7D',
                options: {
                    "product": {
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "calc(25% - 20px)",
                                    "margin-left": "20px",
                                    "margin-bottom": "50px",
                                    "width": "calc(25% - 20px)"
                                },
                                "img": {
                                    "height": "calc(100% - 15px)",
                                    "position": "absolute",
                                    "left": "0",
                                    "right": "0",
                                    "top": "0"
                                },
                                "imgWrapper": {
                                    "padding-top": "calc(75% + 15px)",
                                    "position": "relative",
                                    "height": "0"
                                }
                            },
                            "button": {
                                "font-family": "Montserrat, sans-serif",
                                "font-weight": "bold",
                                ":hover": {
                                    "background-color": "#0f5fe3"
                                },
                                "background-color": "#116afc",
                                ":focus": {
                                    "background-color": "#0f5fe3"
                                }
                            }
                        },
                        "buttonDestination": "modal",
                        "contents": {
                            "options": false
                        },
                        "text": {
                            "button": "View product"
                        },
                        "googleFonts": [
                            "Montserrat"
                        ]
                    },
                    "productSet": {
                        "iframe": false,
                        "styles": {
                            "products": {
                                "@media (min-width: 601px)": {
                                    "margin-left": "-20px"
                                }
                            }
                        }
                    },
                    "modalProduct": {
                        "contents": {
                            "img": false,
                            "imgWithCarousel": true,
                            "button": false,
                            "buttonWithQuantity": true
                        },
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0px",
                                    "margin-bottom": "0px"
                                }
                            },
                            "button": {
                                "font-family": "Montserrat, sans-serif",
                                "font-weight": "bold",
                                ":hover": {
                                    "background-color": "#0f5fe3"
                                },
                                "background-color": "#116afc",
                                ":focus": {
                                    "background-color": "#0f5fe3"
                                }
                            }
                        },
                        "googleFonts": [
                            "Montserrat"
                        ],
                        "text": {
                            "button": "Add to cart"
                        }
                    },
                    "cart": {
                        "styles": {
                            "button": {
                                "font-family": "Montserrat, sans-serif",
                                "font-weight": "bold",
                                ":hover": {
                                    "background-color": "#0f5fe3"
                                },
                                "background-color": "#116afc",
                                ":focus": {
                                    "background-color": "#0f5fe3"
                                }
                            }
                        },
                        "text": {
                            "total": "Subtotal",
                            "button": "Checkout"
                        },
                        "googleFonts": [
                            "Montserrat"
                        ]
                    },
                    "toggle": {
                        "styles": {
                            "toggle": {
                                "font-family": "Montserrat, sans-serif",
                                "font-weight": "bold",
                                "background-color": "#116afc",
                                ":hover": {
                                    "background-color": "#0f5fe3"
                                },
                                ":focus": {
                                    "background-color": "#0f5fe3"
                                }
                            }
                        },
                        "googleFonts": [
                            "Montserrat"
                        ]
                    }
                },
            });
        });
    }
};
/*]]>*/