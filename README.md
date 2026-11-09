# DinePilot — Your Restaurant. Better Connected.

A six-page static agency website for **DinePilot**, a digital studio helping independent
cafés and small restaurants in the United States build a stronger online presence.

No build step, no framework, no dependencies at runtime. Open `index.html` or serve the
folder with any static host.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home — hero, services, why DinePilot, featured work, process, CTA |
| `services.html` | Services — websites (available), reservations and AI assistants (in development) |
| `pricing.html` | Pricing — $19 Basic Website, free vs premium hosting, fine print |
| `work.html` | Our Work — Beira Alta live demo and two labelled design studies |
| `about.html` | About — studio approach, principles, standards |
| `contact.html` | Contact — demo enquiry form, what happens next |

Shared styling lives in `assets/css/styles.css`; navigation and scroll reveals are in
`assets/js/main.js`. Photography is in `assets/img/`.

## Run locally

```bash
cd dinepilot
python3 -m http.server 4173
# http://localhost:4173
```

## Deploy

The site is plain static files, so it works on GitHub Pages, Netlify, Cloudflare Pages
or any paid static host.

**GitHub Pages**

1. Push the contents of this folder to a repository.
2. Repository → Settings → Pages → Source: *Deploy from a branch*.
3. Choose the branch and `/ (root)`, then save.
4. The site appears at `https://<user>.github.io/<repo>/`.

All links are relative, so it works from a project subpath without changes. To use a
custom domain you own, add it under Settings → Pages → Custom domain and configure the
DNS records with your registrar.

## Content and claims

The site intentionally avoids fabricated content:

- **Beira Alta** is labelled as a concept/demo project everywhere it appears. It links to
  the live demo at <https://asahixabhi.github.io/Beira-alta-demo/>.
- No client testimonials, reviews, performance statistics or partner logos are used.
- No email address, phone number, office address or social accounts are invented.
- Online Reservations and AI Restaurant Assistants are marked **Coming Soon** /
  **In development** with no prices, because neither is implemented yet.
- The $19 figure is the one-time website setup price. Premium hosting, domains,
  third-party booking fees and AI service fees are stated as separate, customer-paid costs.

## The contact form

`contact.html` sends enquiries to `asahixabhi07@gmail.com` through FormSubmit. FormSubmit
requires the inbox owner to confirm its activation email after the first submission before
it will deliver enquiries. FormSubmit retains submissions for 30 days. Review its
[privacy information](https://formsubmit.co/privacy) before inviting visitors to submit
personal details.

## Photography

Images are sourced from [Unsplash](https://unsplash.com) and used under the
[Unsplash License](https://unsplash.com/license). They are illustrative and do not depict
real DinePilot clients. Replace them with a restaurant's own photography before launch
wherever possible.
