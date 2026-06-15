# Lexify Web — Notes (trạng thái & việc cần làm)

> Cập nhật: 2026-06-16

Trang giới thiệu sản phẩm + nơi tải (Chrome extension & Android APK).

## Thông tin nhanh

| | |
|---|---|
| Live URL | https://lexify-8e0cf.web.app |
| Hosting | Firebase Hosting (project `lexify-8e0cf`, dùng chung với app) |
| Repo | `git@github.com:hieubruce/lexify-web.git` (nhánh `main`) |
| Stack | Vite + React 19 + TypeScript + Tailwind 3 |
| Brand | "Ink & Paper" — Emerald primary, Coral accent, Fraunces + Inter, dark/light |

---

## ✅ Đã làm

- [x] Dựng landing page đầy đủ: Hero (flashcard render bằng CSS) · Features · How it works · Sync (extension + app) · Download (Chrome + APK + hướng dẫn sideload) · FAQ · About + CTA · Footer.
- [x] Dark/light (nhớ lựa chọn, không chớp màu), responsive mobile→desktop, scroll-reveal, a11y focus ring.
- [x] Wire link thật: Add to Chrome (store ID `fjdohlngpfkfhpdgfmfmjjgdljfcfcfk`), Download APK (latest release của `lexify-app`), Privacy (`hieubruce.github.io/lexify-privacy`).
- [x] Sửa bug nút trắng mất chữ ở CTA band (variant `white`/`outlineLight`).
- [x] Deploy lên Firebase Hosting (đã `firebase login` bằng `hieubruce123@gmail.com`).
- [x] `public/version.json` — manifest cho tính năng tự cập nhật của app mobile.
- [x] Push `main`. (Phase 2 update-check nằm ở repo `lexify-mobile`, kèm `docs/RELEASE.md`.)

---

## ⏳ Cần làm tiếp

### Ưu tiên — để mọi thứ chạy thật
- [ ] **Tạo release APK đầu tiên** ở `lexify-app` (build trên Windows theo `lexify-mobile/docs/RELEASE.md`). **Hiện nút "Download APK" bấm vào sẽ 404** vì chưa có release nào.
- [ ] Sau khi có release: kiểm tra nút Download tải đúng file.

### Mỗi lần ra bản app mới (quy trình lặp)
- [ ] Cập nhật `public/version.json` (`latestVersionCode` = đúng versionCode bản mới) → `npm run build && firebase deploy --only hosting`. **Bỏ bước này thì banner update trong app không nhảy.** Chi tiết: `lexify-mobile/docs/RELEASE.md` bước 3.

### Nice-to-have (chưa gấp)
- [ ] **og:image** 1200×630 PNG cho preview khi share link (FB/Zalo/Twitter). Hiện chưa có ảnh → share ra chỉ có chữ.
- [ ] Thay flashcard CSS bằng **screenshot thật** của app/extension ở mục Features (thuyết phục hơn).
- [ ] **Tên miền riêng** (vd `lexify.app`) trỏ vào Firebase Hosting — thay cho `.web.app`.
- [ ] `README.md` cho repo `lexify-app` (hiện đang rỗng).
- [ ] (Tùy chọn) CI auto-deploy: hiện deploy **thủ công** bằng `firebase deploy`. Có thể thêm GitHub Actions deploy khi push `main`.

---

## Lệnh hay dùng

```bash
npm install                              # cài deps (lần đầu)
npm run dev                              # dev http://localhost:5173
npm run build                            # build production → dist/
npm run preview                          # xem thử bản build

# Deploy (đã đăng nhập firebase sẵn):
npm run build && firebase deploy --only hosting
```

> Node được cài qua Homebrew (`/opt/homebrew/bin`). Firebase CLI: `npm i -g firebase-tools`.

---

## Vị trí file quan trọng

| File | Vai trò |
|---|---|
| `src/lib/constants.ts` | **Tất cả link ngoài** (store, APK, privacy, email) — sửa link ở đây |
| `src/App.tsx` | Lắp ráp các section |
| `src/components/*` | Header, Hero, FlashcardMockup, Features, HowItWorks, Sync, Download, Faq, About, Footer |
| `tailwind.config.js` | Token màu brand (Emerald/Coral/paper/ink) |
| `public/version.json` | Manifest bản mới nhất cho app tự cập nhật |
| `firebase.json` / `.firebaserc` | Cấu hình Hosting (project `lexify-8e0cf`) |
| `.github/workflows/deploy.yml` | Workflow GitHub Pages (dự phòng, chưa bật — đang dùng Firebase) |
