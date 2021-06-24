
                this.style.borderColor = "white";
                    let hello = document.getElementById("home-hello");
                    let message = document.getElementById("home-message");
                    message.style.opacity = 1;

                    function animateHello(offset, opacity) {
                        if (offset <= 0) {
                            hello.style.top = 0;
                            hello.style.opacity = 1;
                        } else {
                            hello.style.top = offset + "em";
                            hello.style.opacity = opacity;
                            setTimeout(() => animateHello(offset - 0.08, opacity + 0.08), 30);
                        }
                    }

                    animateHello(1.5, 0);

                    const easteregg_fry = (e) => {
                        if (!window.easteregg_fry_trial) {
                            window.easteregg_fry_trial = true;
                            setTimeout(() => {
                                if (window.easteregg_fry_trial) {
                                    this.src = "/media/fried.jpg";
                                    hello.innerText = "Oh noe";
                                    message.innerHTML = "<p>wat have u done</p>";
                                    window.easteregg_fry_trial = false;
                                }
                            }, 2000)
                        }
                    };
                    const easteregg_fry_holdlisten = (e) => {
                        if (window.easteregg_fry_trial) {
                            window.easteregg_fry_trial = false;
                        }
                    };
                    this.removeEventListener("mouseup", easteregg_fry_holdlisten);
                    this.addEventListener("mouseup", easteregg_fry_holdlisten);
                    this.removeEventListener("touchend", easteregg_fry_holdlisten);
                    this.addEventListener("touchend", easteregg_fry_holdlisten);

                    this.removeEventListener("mousedown", easteregg_fry);
                    this.addEventListener("mousedown", easteregg_fry);
                    this.removeEventListener("touchstart", easteregg_fry);
                    this.addEventListener("touchstart", easteregg_fry);
                