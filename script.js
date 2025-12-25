const fb = document.querySelector('.facebook');
if (fb) {
  fb.addEventListener('click', (e) => {
    // Open Facebook profile in a new tab; change URL if you want a different page
    window.open('https://www.facebook.com/dinesh.sutar.9275439', '_blank', 'noopener');
  });
}
const insta = document.querySelector(".instagram");
if (insta) {
  insta.addEventListener('click', (e) => {
    // Open Facebook profile in a new tab; change URL if you want a different page
    window.open('https://www.instagram.com/_d_nesh._/', '_blank', 'noopener');
  });
}
const wp = document.querySelector(".whatsapp");
 
if (wp) {
  wp.addEventListener('click', (e) => {
    // Open Facebook profile in a new tab; change URL if you want a different page
    window.open('https://wa.me/+918984041578?text= Hii.......', '_blank', 'noopener');

  });
}
const git = document.querySelector(".github");
  if (git) {
    git.addEventListener('click', (e) => {
      // Open Facebook profile in a new tab; change URL if you want a different page
      window.open('https://github.com/dinesh131231', '_blank', 'noopener');
    });
  }
const lnkdn = document.querySelector(".linkedin");

  if (lnkdn) {
    lnkdn.addEventListener('click', (e) => {
      // Open Facebook profile in a new tab; change URL if you want a different page
      window.open('https://www.linkedin.com/in/dinesh-sutar-3b64882a6', '_blank', 'noopener');
    });
  }

let span_icon = document.querySelector("span.icon")
let dd_manue = document.querySelector(".dd_manue")









function clicked_icon() {
  dd_manue.style.display = 'flex'
  span_icon.style.display = 'none'
}

function close_icon() {
  dd_manue.style.display = 'none'
  span_icon.style.display = 'flex'
}





// let dd-manue = document.querySelector(".dd-manue")

// // document.querySelector(".icon").addEventListener("click", (e)=>{
// //  showdd_manue()
// })

// Animate skill progress bars when the skills section enters the viewport
document.addEventListener('DOMContentLoaded', () => {
  const skillSection = document.querySelector('.skill');
  if (!skillSection) return;

  const bars = skillSection.querySelectorAll('.progress-bar');

  const animateBar = (bar, target) => {
    const duration = 1000; // ms
    const start = performance.now();
    const startVal = 0;

    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.round(startVal + (target - startVal) * progress);
      bar.style.width = value + '%';
      bar.setAttribute('aria-valuenow', value);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        bars.forEach(bar => {
          const t = parseInt(bar.getAttribute('data-target') || '0', 10);
          // avoid reanimating
          if (!bar.dataset.animated) {
            animateBar(bar, t);
            bar.dataset.animated = 'true';
          }
        });
        // Once animated, we can stop observing
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  observer.observe(skillSection);
});

// Profile counters: persistent and editable
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.profile-counters .counter');
  if (!counters.length) return;

  const loadValue = (key, fallback = 0) => {
    const v = localStorage.getItem('profile_counter_' + key);
    return v !== null ? parseInt(v, 10) : fallback;
  };

  const saveValue = (key, val) => {
    localStorage.setItem('profile_counter_' + key, String(val));
  };

  counters.forEach(counter => {
    const key = counter.dataset.key;
    const display = counter.querySelector('.count');
    const inc = counter.querySelector('.inc');
    const dec = counter.querySelector('.dec');
    const edit = counter.querySelector('.edit');

    let value = loadValue(key, 0);
    display.textContent = value;

    inc.addEventListener('click', () => {
      value = Math.max(0, value + 1);
      display.textContent = value;
      saveValue(key, value);
    });

    dec.addEventListener('click', () => {
      value = Math.max(0, value - 1);
      display.textContent = value;
      saveValue(key, value);
    });

    edit.addEventListener('click', () => {
      const input = prompt('Set value for ' + key + ' (number):', String(value));
      if (input === null) return; // cancel
      const n = parseInt(input.trim(), 10);
      if (!Number.isNaN(n) && n >= 0) {
        value = n;
        display.textContent = value;
        saveValue(key, value);
      } else {
        alert('Please enter a valid non-negative number');
      }
    });
  });
});

// Trigger footer logo animation when header logo is clicked
document.addEventListener('DOMContentLoaded', () => {
  const headerLogo = document.querySelector('.mlogo');
  const footerLogo = document.querySelector('.logo');
  if (!headerLogo || !footerLogo) return;

  headerLogo.addEventListener('click', () => {
    // add class to trigger CSS animation
    footerLogo.classList.remove('animate');
    // force reflow to restart animation
    void footerLogo.offsetWidth;
    footerLogo.classList.add('animate');

    // ensure class removed after animation completes
    const cleanup = () => {
      footerLogo.classList.remove('animate');
      footerLogo.removeEventListener('animationend', cleanup);
    };
    footerLogo.addEventListener('animationend', cleanup);
    // fallback: remove after 700ms in case animationend doesn't fire
    setTimeout(() => footerLogo.classList.remove('animate'), 700);
  });
});

// Add press animation on social icons when clicked
document.addEventListener('DOMContentLoaded', () => {
  const socials = document.querySelectorAll('.logo .social');
  socials.forEach(s => {
    s.addEventListener('click', (e) => {
      s.classList.add('clicked');
      setTimeout(() => s.classList.remove('clicked'), 150);
    });
  });
});

// Typing animation for the home paragraph (.detail p)
document.addEventListener('DOMContentLoaded', () => {
  const para = document.querySelector('.detail p');
  if (!para) return;

  const fullText = para.textContent.trim();
  para.textContent = '';

  const typingSpeed = 50; // ms per character (adjust for faster/slower)

  let index = 0;
  const type = () => {
    if (index <= fullText.length) {
      para.textContent = fullText.slice(0, index);
      index += 1;
      setTimeout(type, typingSpeed);
    } else {
      // Ensure the full text is present at the end
      para.textContent = fullText;
    }
  };

  // Start typing a short time after load so layout settles
  setTimeout(type, 300);
});
