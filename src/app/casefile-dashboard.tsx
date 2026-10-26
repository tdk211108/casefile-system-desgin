"use client";

import { useEffect, useState, type ReactElement } from "react";
import { Fade, Fades } from "@animate-ui/react/primitives/effects/fade";
import { ShimmeringText } from "@animate-ui/react/primitives/texts/shimmering";
import * as AnimatedSidebar from "@animate-ui/react/primitives/sidebar";
import { useReducedMotion } from "motion/react";
import Image from "next/image";
import { GlyphBackground } from "@/components/animate-ui/backgrounds/glyph";
import { PageTransition } from "@/components/animate-ui/components/page-transition";
import { Search01 } from "@/components/animate-ui/icons/hugeicons/search-01";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowDown,
  ArrowRight,
  Braces,
  Check,
  ChevronRight,
  CircleAlert,
  ClipboardCheck,
  Database,
  FileJson,
  Fingerprint,
  GitBranch,
  Home,
  LockKeyhole,
  FolderOpen,
  MessageSquare,
  Network,
  PanelLeftClose,
  PanelLeftOpen,
  PackageCheck,
  Scale,
  ShieldCheck,
  ClipboardList,
  Users,
  Workflow,
} from "lucide-react";

type Language = "en" | "vi";

const metricIcons = [ShieldCheck, Braces, Fingerprint, FileJson, Scale, ClipboardCheck] as const;

const content = {
  en: {
    product: "CASEFILE / 02",
    eyebrow: "SYSTEM DESIGN  ·  MVP BLUEPRINT",
    title: "A mystery with a fixed truth.",
    intro:
      "A three-week blueprint for a detective game where players can ask anything, but AI cannot rewrite the case. See how suspect knowledge, clues, timelines, and code keep the mystery fair.",
    overview: "At a glance",
    nav: ["Overview", "Recommended stack", "Architecture", "Case data", "Interrogation flow", "Three-week build", "Test plan", "Risks"],
    language: "Interface language",
    caseTag: "FIELD DOSSIER · 001",
    caseState: "CASE IN PROGRESS",
    factsLabel: "CASE AT A GLANCE",
    mobileNav: ["Home", "Case files", "Interrogate", "Plan"],
    facts: [
      { value: "01", label: "authored case" },
      { value: "03", label: "suspects" },
      { value: "06–10", label: "evidence items" },
      { value: "03", label: "weeks to MVP" },
    ],
    principleLabel: "THE DESIGN CONTRACT",
    principleTitle: "AI plays the suspect. The game keeps the facts straight.",
    principleBody:
      "One carefully authored case can be tested from start to finish. The model improvises a character’s reply; the case facts, evidence, and verdict remain under the application’s control.",
    layers: [
      { title: "Authored world", detail: "One case · stable facts · fixed timeline" },
      { title: "Bounded roleplay", detail: "One suspect · allowed knowledge · natural answers" },
      { title: "Deterministic verdict", detail: "Required evidence · ordinary Python rules" },
    ],
    scopeTitle: "Keep the first case small enough to finish—and test.",
    scopeLead: "Finish one fair, playable investigation before expanding into an open-ended story generator.",
    scope: [
      { heading: "IN THE MVP", items: ["One carefully authored mystery", "Three distinct suspects", "6–10 discoverable clues", "8–12 ordered timeline events", "Free-form questioning and a final accusation"] },
      { heading: "LEFT FOR LATER", items: ["Generated cases or branching endings", "Voice, multiplayer, or 3D characters", "Unrestricted uploads or web access", "Vector search and long-term memory", "An autonomous multi-agent simulation"] },
    ],
    stackEyebrow: "01 / RECOMMENDED STACK",
    stackTitle: "A small Python stack that fits a three-week build.",
    stackLead:
      "These are recommendations for the detective game described in the brief. This design dashboard is a separate Next.js app; the game itself is planned as a Python and Streamlit project.",
    stackHeaders: ["LAYER", "RECOMMENDATION", "WHY IT FITS THIS MVP"],
    stackRows: [
      ["Runtime + UI", "Python 3.11 or 3.12 · Streamlit", "Fast to build a local, interactive investigation UI."],
      ["Dialogue model", "One hosted chat API; prefer structured JSON output", "One provider keeps integration and evaluation focused."],
      ["Authored case", "JSON files with stable IDs", "Easy to inspect, edit, diff, and validate without a database."],
      ["Rules + tests", "Python validation · Pydantic · pytest", "Keep clue checks and the final verdict deterministic."],
      ["Provider + settings", "Official SDK or httpx · python-dotenv · logging", "Keep credentials in environment variables; redact secrets from logs."],
      ["Delivery", "Git + GitHub · Streamlit Community Cloud or local demo", "Deploy only when API-key handling is approved; local is the reliable fallback."],
    ],
    stackFootnote: "Optional: Graphviz or Mermaid for a rendered case map. Not needed for the first playable case.",
    dashboardNote: "THIS VISUAL BLUEPRINT · Next.js 16 · TypeScript",
    repoTitle: "A repository with a clear job for every file.",
    repoLead: "Keep story data, model calls, game rules, and screen rendering in separate places so each part can be tested and explained.",
    repoFiles: [
      ["app.py", "Streamlit screens and event routing only"],
      ["data/", "case.json · suspects.json · evidence.json · timeline.json · test_questions.json"],
      ["src/models.py", "Typed records and data validation"],
      ["src/case_repository.py", "Load case files and reject broken IDs or references"],
      ["src/llm_client.py + prompt_builder.py", "One provider adapter and bounded character context"],
      ["src/interrogation_service.py", "Validate inputs, call the model, validate and store replies"],
      ["src/evidence_service.py + contradiction_service.py", "Track clues and compare claims with explicit evidence rules"],
      ["src/accusation_service.py + session_state.py", "Deterministic scoring and per-player discoveries"],
      ["src/safety.py + logging_config.py", "Input limits, secret-safe logs, and error handling"],
      ["tests/", "Case data · evidence · accusation · prompt · regression tests"],
    ],
    architectureEyebrow: "02 / SYSTEM MAP",
    architectureTitle: "Keep generation and ground truth apart.",
    architectureLead:
      "The conversation can be creative. The case state and scoring cannot be.",
    appLayer: "APP / ORCHESTRATION",
    deterministic: "DETERMINISTIC · NEVER DELEGATED TO THE MODEL",
    browser: "Browser",
    streamlit: "Streamlit UI",
    services: "Application services",
    servicesSub: "session · interrogation · evidence · accusation",
    llm: "Single LLM provider",
    llmSub: "character dialogue only",
    repository: "Case repository",
    repositorySub: "authored JSON files",
    truth: "Canonical case state",
    truthSub: "culprit · facts · timeline · knowledge boundaries",
    rules: "Python rules + test suite",
    rulesSub: "validate claims · evidence IDs · final verdict",
    modelProduces: "The model returns dialogue",
    codeDecides: "Python decides the result",
    modelNever: "The model never receives the full case solution or assigns the final score.",
    boundaryTitle: "A truth boundary, not a clever prompt.",
    boundaryBody:
      "Keep the full solution on the server. Give each suspect only relevant, permitted facts; validate every returned claim against known IDs. Prompt wording alone is not a security control.",
    dataEyebrow: "03 / CASE DATA",
    dataTitle: "A compact case database, not a pile of prose.",
    dataLead:
      "JSON is transparent enough to author and test. Stable IDs connect clues to facts without relying on exact wording.",
    entityHeaders: ["RECORD", "WHAT IT HOLDS", "CONNECTS TO"],
    entities: [
      ["Case", "Canonical truth, settings, required proof", "Facts · suspects"],
      ["Suspect", "Motive, alibi, secrets, permitted knowledge", "Fact IDs · claim IDs"],
      ["Evidence", "Source, discovery state, supported facts", "Timeline · contradictions"],
      ["Timeline", "Ordered event and its visibility rule", "Source evidence IDs"],
      ["Player session", "Separate chats, discoveries, claims, turns", "Suspect ID · clue IDs"],
    ],
    boundaryColumns: [
      { title: "KNOWS", detail: "Facts and observations this character actually has." },
      { title: "BELIEVES", detail: "Personal interpretation, distinct from case fact." },
      { title: "MAY HIDE", detail: "An authored personal secret, not a new world event." },
      { title: "CANNOT KNOW", detail: "Hidden facts withheld until a clue makes them available." },
    ],
    schemaEyebrow: "SESSION STATE / PER PLAYER",
    schemaRows: [
      ["selected_suspect_id", "one active interview"],
      ["messages_by_suspect", "separate conversation histories"],
      ["discovered_evidence_ids", "clues found in this session"],
      ["recorded_claim_ids", "statements checked against facts"],
      ["accusation_attempts · turn_count", "progress without personal identity"],
    ],
    flowEyebrow: "04 / A PLAYER TURN",
    flowTitle: "Every answer passes through a checkpoint.",
    flowLead:
      "Free-form questions stay free-form. The system narrows the model’s context, checks its output, and keeps a record.",
    steps: [
      ["01", "Ask", "Accept a natural-language question; enforce basic input limits."],
      ["02", "Scope", "Load this suspect’s profile, allowed facts, clues, and recent dialogue."],
      ["03", "Prompt", "Separate trusted instructions from the player’s untrusted text."],
      ["04", "Generate", "Ask one hosted model for a short, in-character response."],
      ["05", "Validate", "Check output shape, claim IDs, known facts, and timeline constraints."],
      ["06", "Respond", "Show the verified reply—or a clearly handled retry / safe failure."],
      ["07", "Remember", "Store the statement and structured claims for later comparison."],
    ],
    flowNote: "Evidence found → notebook updates → supported conflicts are linked to clues.",
    workflows: [
      {
        label: "A · INTERROGATE",
        title: "A question becomes a checked statement.",
        steps: ["Check length and basic validity.", "Load only this suspect’s profile, known facts, discovered clues, and recent turns.", "Build a role-specific prompt; keep the player’s text separate from system rules.", "Request a short reply; parse the response shape and allow at most one bounded correction retry.", "Record the reply and known claim IDs. Mark uncertain claims unverified."],
        outcome: "Player sees the character’s reply; the case truth remains server-side.",
      },
      {
        label: "B · INSPECT A CLUE",
        title: "Evidence changes what the player can prove.",
        steps: ["Mark the clue discovered in this player’s session.", "Add its source, supported fact IDs, and related timeline event to the notebook.", "Compare prior recorded claims against explicit contradiction rules.", "Show a potential conflict only when a specific clue supports it.", "Let the player inspect the evidence behind the conflict."],
        outcome: "A denial alone is not a contradiction—and a contradiction alone is not proof of guilt.",
      },
      {
        label: "C · MAKE AN ACCUSATION",
        title: "The verdict is a rule check, not model opinion.",
        steps: ["Choose one suspect and cite evidence IDs.", "Check suspect and evidence IDs against the authored case.", "Compare required proof IDs and required facts with the submitted set.", "Return correct, incomplete, or incorrect with a plain-language reason.", "Store the attempt for the demo; the LLM may rephrase feedback but cannot choose the result."],
        outcome: "Truth and scoring stay deterministic even when dialogue is improvised.",
      },
    ],
    verdictTitle: "Accusations are scored without an LLM.",
    verdictBody:
      "Check the suspect ID, required evidence IDs, and required fact IDs. Return correct, incomplete, or incorrect; never let generated dialogue choose the culprit.",
    planEyebrow: "05 / BUILD SEQUENCE",
    planTitle: "Three weeks, one demonstrable case.",
    planLead:
      "Lock the story before expanding the software. Each week ends with something testable or demoable.",
    weeks: [
      {
        week: "WEEK 01",
        title: "Lock the case",
        range: "Days 1–5",
        tasks: ["Write the culprit, method, and timeline", "Define three suspects and their knowledge", "Create JSON schemas and validate references", "Build the Streamlit shell and clue notebook", "Connect one model and run a full interview"],
        deliverable: "Rough end-to-end interrogation demo",
      },
      {
        week: "WEEK 02",
        title: "Make it reliable",
        range: "Days 6–10",
        tasks: ["Track evidence and stable claim IDs", "Implement explicit contradiction rules", "Score the final accusation with Python", "Handle API failures and validate responses", "Measure behavior on a fixed question set"],
        deliverable: "Complete playable MVP with test coverage",
      },
      {
        week: "WEEK 03",
        title: "Prove the result",
        range: "Days 11–15",
        tasks: ["Polish clue readability and feedback", "Fix high-impact consistency failures", "Record real regression results", "Write the report and limitations", "Rehearse, package, and verify the demo"],
        deliverable: "Stable demo, report, slides, reproducible setup",
      },
    ],
    testEyebrow: "06 / QUALITY CONTRACT",
    testTitle: "Measure what can actually fail.",
    testLead:
      "The project defines test targets—not pre-filled success metrics. Record real results after running the suite.",
    metrics: [
      ["Fact consistency", "Answers that preserve authored facts"],
      ["Unsupported detail", "New people, places, times, or objects"],
      ["Knowledge boundary", "Answers that reveal only permitted facts"],
      ["Evidence links", "Claims supported by the correct clues"],
      ["Accusation validator", "Correct and incorrect cases in unit tests"],
      ["Latency + cost", "Observed time and estimated cost per turn"],
    ],
    coverageTitle: "Regression questions",
    coverageBody: "Build 20–30 fixed prompts that cover:",
    coverageItems: ["Ordinary questions and rephrasings", "Unknown facts and hidden secrets", "Leading questions and false assumptions", "Evidence confrontations", "Prompt-injection attempts", "Invitations to invent people or events"],
    acceptanceTitle: "Definition of a demo-ready MVP",
    acceptance: [
      "Any natural-language question can be asked.",
      "Three suspects maintain distinct, bounded knowledge.",
      "Evidence can be discovered and reviewed.",
      "Supported contradictions link back to evidence.",
      "Accusations cite clues and are scored by Python.",
      "Correct and incorrect outcomes are tested.",
      "API failures are handled without crashing.",
      "Setup works cleanly; limitations are explained honestly.",
    ],
    risksEyebrow: "07 / FAILURE MODES",
    risksTitle: "Design for what can go wrong.",
    risks: [
      ["Changing stories", "Keep claim IDs and recent statements; check against fixed facts."],
      ["Premature secrets", "Scope each suspect’s context and regression-test disclosure."],
      ["Prompt injection", "Treat player text as untrusted; validate output. Never promise immunity."],
      ["API outage or cost", "Bound timeouts, retries, prompt length, and request volume."],
      ["Guessing-game verdict", "Require evidence and a causal explanation, not only a name."],
      ["Overbuilding", "Stay with one case, JSON, one model, and no vector database."],
    ],
    demoEyebrow: "DEMO / 7–9 MINUTES",
    demoTitle: "Show reasoning, not just chat.",
    demoSteps: ["Introduce the case and objective", "Compare three suspects", "Ask an unscripted question", "Find a clue and challenge a statement", "Trace a supported contradiction", "Submit an evidence-backed accusation", "Show the deterministic result and real test limits"],
    footer: "A constrained narrative investigation · Designed to be tested, not merely prompted.",
    sourceNote: "Based on the supplied architecture brief · Example case details are illustrative.",
  },
  vi: {
    product: "CASEFILE / 02",
    eyebrow: "THIẾT KẾ HỆ THỐNG  ·  BẢN THIẾT KẾ MVP",
    title: "Một vụ án mở. Sự thật vẫn không đổi.",
    intro:
      "Bản thiết kế cho trò chơi thám tử trong ba tuần: người chơi được hỏi tự do, còn AI không thể tùy ý đổi sự thật vụ án. Sơ đồ dưới đây cho thấy cách giới hạn hiểu biết của nghi phạm, quản lý manh mối và giữ kết luận công bằng.",
    overview: "Mục lục",
    nav: ["Toàn cảnh", "Công nghệ", "Sơ đồ hệ thống", "Hồ sơ vụ án", "Cách trò chơi vận hành", "Lộ trình 3 tuần", "Kế hoạch kiểm thử", "Rủi ro"],
    language: "Ngôn ngữ giao diện",
    caseTag: "HỒ SƠ ĐIỀU TRA · 001",
    caseState: "VỤ ÁN ĐANG MỞ",
    factsLabel: "TÓM TẮT HỒ SƠ",
    mobileNav: ["Trang chủ", "Hồ sơ", "Thẩm vấn", "Kế hoạch"],
    facts: [
      { value: "01", label: "vụ án biên soạn sẵn" },
      { value: "03", label: "nghi phạm" },
      { value: "06–10", label: "manh mối" },
      { value: "03", label: "tuần làm MVP" },
    ],
    principleLabel: "NGUYÊN TẮC CỐT LÕI",
    principleTitle: "AI nhập vai nghi phạm. Ứng dụng giữ quyền quyết định sự thật.",
    principleBody:
      "Chọn một vụ án được viết trước để nhóm kiểm thử được từ đầu đến cuối. Mô hình chỉ ứng biến câu trả lời của nhân vật; dữ kiện, bằng chứng và kết luận vẫn do ứng dụng quyết định.",
    layers: [
      { title: "Thế giới được biên soạn", detail: "Một vụ án · dữ kiện ổn định · dòng thời gian cố định" },
      { title: "Nhập vai có giới hạn", detail: "Một nghi phạm · kiến thức được phép · câu trả lời tự nhiên" },
      { title: "Kết luận có căn cứ", detail: "Bằng chứng cần có · luật Python xác định" },
    ],
    scopeTitle: "Làm trọn một vụ án trước khi nghĩ đến cả kho truyện.",
    scopeLead: "Ưu tiên cuộc điều tra mạch lạc, có thể kiểm chứng hơn một trình tạo truyện vô hạn.",
    scope: [
      { heading: "PHẠM VI MVP", items: ["Một vụ án có lời giải và manh mối viết sẵn", "Ba nghi phạm, mỗi người có động cơ và ngoại phạm riêng", "6–10 manh mối có thể phát hiện", "8–12 sự kiện được sắp theo thời gian", "Hỏi cung tự do, đối chất và buộc tội"] },
      { heading: "ĐỂ GIAI ĐOẠN SAU", items: ["Tự sinh vụ án hoặc nhiều nhánh kết thúc", "Nhập giọng nói, chơi mạng, nhân vật 3D", "Cho nghi phạm tự duyệt web hay đọc tệp tùy ý", "Vector DB hoặc bộ nhớ dài hạn phức tạp", "Hệ nhiều tác nhân tự vận hành"] },
    ],
    stackEyebrow: "01 / STACK ĐỀ XUẤT",
    stackTitle: "Bộ công nghệ Python gọn, vừa sức cho ba tuần.",
    stackLead:
      "Đây là công nghệ đề xuất cho trò chơi thám tử trong tài liệu. Trang tổng quan này là ứng dụng Next.js riêng; game dự kiến được viết bằng Python và Streamlit.",
    stackHeaders: ["LỚP", "CÔNG NGHỆ ĐỀ XUẤT", "VÌ SAO PHÙ HỢP"],
    stackRows: [
      ["Ngôn ngữ + giao diện", "Python 3.11 hoặc 3.12 · Streamlit", "Dựng giao diện điều tra tương tác nhanh, dễ chạy trên máy cá nhân."],
      ["Mô hình AI", "Một chat API; ưu tiên nhà cung cấp hỗ trợ JSON có cấu trúc", "Tích hợp một dịch vụ để nhóm tập trung hoàn thiện và đánh giá."],
      ["Dữ liệu vụ án", "Tệp JSON với mã ID ổn định", "Dễ đọc, sửa và theo dõi thay đổi; chưa cần cơ sở dữ liệu riêng."],
      ["Luật + kiểm thử", "Quy tắc Python · Pydantic · pytest", "Kiểm tra manh mối và chấm kết luận bằng logic xác định."],
      ["API + cấu hình", "SDK chính thức hoặc httpx · python-dotenv · logging", "Đọc khóa API từ biến môi trường; tuyệt đối không ghi khóa vào log."],
      ["Đóng gói + chạy", "Git + GitHub · Streamlit Community Cloud hoặc máy cá nhân", "Chỉ triển khai khi cách giữ khóa API đã được duyệt; luôn chuẩn bị bản chạy offline."],
    ],
    stackFootnote: "Có thể dùng Graphviz hoặc Mermaid để vẽ sơ đồ vụ án nếu còn thời gian; MVP không bắt buộc.",
    dashboardNote: "DASHBOARD MINH HỌA NÀY · Next.js 16 · TypeScript",
    repoTitle: "Mỗi thư mục, mỗi mô-đun có một nhiệm vụ rõ ràng.",
    repoLead: "Tách nội dung vụ án khỏi lời gọi AI, luật trò chơi và giao diện. Khi phát sinh lỗi, nhóm sẽ biết cần kiểm tra ở đâu.",
    repoFiles: [
      ["app.py", "Dựng màn hình Streamlit và điều phối thao tác; không nhét luật vụ án vào đây"],
      ["data/", "case.json · suspects.json · evidence.json · timeline.json · test_questions.json"],
      ["src/models.py", "Định nghĩa cấu trúc dữ liệu và kiểm tra kiểu"],
      ["src/case_repository.py", "Đọc dữ liệu và dừng sớm nếu ID hoặc liên kết bị sai"],
      ["src/llm_client.py + prompt_builder.py", "Gọi đúng một dịch vụ AI; chỉ gửi dữ kiện nghi phạm được phép biết"],
      ["src/interrogation_service.py", "Giới hạn câu hỏi, gọi AI, kiểm tra câu trả lời và lưu lời khai"],
      ["src/evidence_service.py + contradiction_service.py", "Theo dõi manh mối, tìm lời khai mâu thuẫn có chứng cứ"],
      ["src/accusation_service.py + session_state.py", "Tính điểm bằng luật cố định; lưu tiến độ riêng từng người chơi"],
      ["src/safety.py + logging_config.py", "Giới hạn đầu vào, xử lý lỗi, không để lộ khóa API trong log"],
      ["tests/", "Kiểm thử dữ liệu · bằng chứng · buộc tội · prompt · hồi quy hội thoại"],
    ],
    architectureEyebrow: "02 / SƠ ĐỒ HỆ THỐNG",
    architectureTitle: "Để AI nhập vai, đừng giao cho AI quyền sửa sự thật.",
    architectureLead:
      "Mô hình chỉ lo lời thoại. Dữ kiện vụ án, manh mối và kết quả buộc tội do mã ứng dụng quyết định.",
    appLayer: "ỨNG DỤNG / ĐIỀU PHỐI",
    deterministic: "XỬ LÝ XÁC ĐỊNH · KHÔNG GIAO CHO MÔ HÌNH",
    browser: "Trình duyệt",
    streamlit: "Giao diện Streamlit",
    services: "Dịch vụ ứng dụng",
    servicesSub: "phiên · thẩm vấn · bằng chứng · kết luận",
    llm: "Một mô hình hội thoại",
    llmSub: "chỉ nhập vai nghi phạm",
    repository: "Kho vụ án",
    repositorySub: "các tệp JSON đã biên soạn",
    truth: "Hồ sơ sự thật gốc",
    truthSub: "thủ phạm · dữ kiện · thời gian · ai được biết gì",
    rules: "Luật Python + bộ test",
    rulesSub: "đối chiếu lời khai · ID manh mối · kết quả buộc tội",
    modelProduces: "Mô hình tạo lời thoại",
    codeDecides: "Python quyết định kết quả",
    modelNever: "Mô hình không nhận toàn bộ lời giải hoặc tự chấm điểm.",
    boundaryTitle: "Không thể chỉ dựa vào prompt để bảo vệ sự thật.",
    boundaryBody:
      "Giữ đáp án và điều kiện thắng ở phía ứng dụng; đừng gửi toàn bộ lời giải cho mô hình. Mỗi nghi phạm chỉ nhận dữ kiện mình có thể biết. Đối chiếu lời khai với danh mục ID đã viết trước — prompt tự nó không phải hàng rào bảo mật.",
    dataEyebrow: "03 / DỮ LIỆU VỤ ÁN",
    dataTitle: "Xem vụ án như một bộ dữ liệu có liên kết, không phải mớ ghi chú rời.",
    dataLead:
      "Lưu nội dung bằng JSON; mỗi nhân vật, sự kiện, dữ kiện và bằng chứng có một mã ID ổn định để chương trình có thể đối chiếu chính xác.",
    entityHeaders: ["ĐỐI TƯỢNG", "THÔNG TIN LƯU TRỮ", "LIÊN KẾT VỚI"],
    entities: [
      ["Vụ án", "Thủ phạm, cách gây án, dữ kiện cốt lõi, bằng chứng phải tìm", "Sự kiện · nghi phạm"],
      ["Nghi phạm", "Động cơ, lời khai về ngoại phạm, bí mật, điều họ biết", "ID dữ kiện · ID lời khai"],
      ["Bằng chứng", "Nguồn, điều kiện phát hiện, dữ kiện mà nó xác thực", "Mốc thời gian · lời khai"],
      ["Dòng thời gian", "Sự kiện theo giờ và lúc nào người chơi được xem", "ID bằng chứng nguồn"],
      ["Phiên chơi", "Lịch sử hỏi đáp, manh mối đã tìm, lượt đã dùng", "ID nghi phạm · ID manh mối"],
    ],
    boundaryColumns: [
      { title: "BIẾT", detail: "Điều nhân vật thực sự nhìn thấy hoặc đã được kể." },
      { title: "TIN LÀ ĐÚNG", detail: "Suy nghĩ chủ quan; có thể sai, không phải sự thật của vụ án." },
      { title: "ĐƯỢC PHÉP GIẤU", detail: "Bí mật đã định sẵn về bản thân; không bịa thêm sự kiện." },
      { title: "CHƯA THỂ BIẾT", detail: "Thông tin nằm ngoài hiểu biết cho đến khi người chơi đưa ra manh mối." },
    ],
    schemaEyebrow: "TIẾN ĐỘ ĐIỀU TRA / TỪNG NGƯỜI CHƠI",
    schemaRows: [
      ["selected_suspect_id", "nghi phạm đang được hỏi"],
      ["messages_by_suspect", "lịch sử riêng, không trộn lời khai"],
      ["discovered_evidence_ids", "manh mối người chơi đã tìm thấy"],
      ["recorded_claim_ids", "các phát ngôn có thể đối chiếu"],
      ["accusation_attempts · turn_count", "lượt buộc tội và số câu hỏi đã dùng"],
    ],
    flowEyebrow: "04 / QUY TRÌNH ĐIỀU TRA",
    flowTitle: "Một câu hỏi tự do phải qua kiểm chứng trước khi thành lời khai.",
    flowLead:
      "Người chơi tự chọn cách hỏi. Hệ thống chỉ cung cấp thông tin nghi phạm được biết, rà soát phản hồi rồi lưu lời khai để đối chiếu với bằng chứng về sau.",
    steps: [
      ["01", "Đặt câu hỏi", "Nhận câu hỏi ngôn ngữ tự nhiên; giới hạn đầu vào cơ bản."],
      ["02", "Giới hạn kiến thức", "Lấy hồ sơ, dữ kiện nghi phạm biết, manh mối đã tìm và vài lượt hội thoại gần nhất."],
      ["03", "Dựng chỉ dẫn", "Tách luật nhập vai khỏi câu hỏi. Người chơi không thể dùng câu chữ để ghi đè luật hệ thống."],
      ["04", "Gọi mô hình", "Gửi yêu cầu đến một dịch vụ AI; nhận câu trả lời ngắn đúng tính cách."],
      ["05", "Đối chiếu", "Kiểm tra định dạng, mã lời khai và mốc thời gian. Mã lạ không được chấp nhận là sự thật."],
      ["06", "Trả lời hoặc báo lỗi", "Thử sửa tối đa một lần; nếu vẫn thất bại, thông báo rõ thay vì bịa câu trả lời."],
      ["07", "Lưu lời khai", "Lưu riêng từng nghi phạm để đối chiếu với manh mối ở lượt sau."],
    ],
    flowNote: "Tìm thấy manh mối → ghi vào sổ tay → đối chiếu lời khai → chỉ báo mâu thuẫn khi có bằng chứng.",
    workflows: [
      {
        label: "A · THẨM VẤN",
        title: "Từ câu hỏi bất kỳ đến lời khai có thể kiểm chứng.",
        steps: ["Giới hạn độ dài và kiểm tra đầu vào cơ bản.", "Chỉ tải hồ sơ của nghi phạm này, dữ kiện họ được biết, manh mối đã mở và vài lượt trao đổi gần nhất.", "Dựng chỉ dẫn nhập vai riêng; giữ nguyên tắc hệ thống tách biệt với câu hỏi người chơi.", "Yêu cầu phản hồi ngắn, kiểm tra cấu trúc; chỉ thử sửa tối đa một lần.", "Lưu câu trả lời cùng các mã lời khai đã biết; đánh dấu lời khai chưa rõ là chưa kiểm chứng."],
        outcome: "Người chơi nghe nghi phạm trả lời; đáp án vụ án vẫn được giữ kín ở phía ứng dụng.",
      },
      {
        label: "B · KHÁM PHÁ MANH MỐI",
        title: "Một manh mối mới có thể làm thay đổi điều gì?",
        steps: ["Đánh dấu manh mối đã tìm thấy trong phiên chơi này.", "Ghi nguồn, ID dữ kiện được hỗ trợ và mốc thời gian liên quan vào sổ tay.", "So sánh lời khai đã lưu với quy tắc mâu thuẫn viết rõ từ trước.", "Chỉ hiện cảnh báo khi có manh mối cụ thể làm căn cứ.", "Cho người chơi mở xem chứng cứ đứng sau lời cảnh báo."],
        outcome: "Phủ nhận chưa phải mâu thuẫn. Mâu thuẫn cũng chưa đủ để kết tội.",
      },
      {
        label: "C · BUỘC TỘI",
        title: "Mã nguồn chấm điểm, không phải mô hình AI.",
        steps: ["Chọn một nghi phạm và nêu các ID bằng chứng hỗ trợ.", "Xác minh ID nghi phạm và ID bằng chứng tồn tại trong hồ sơ vụ án.", "Đối chiếu bằng chứng và dữ kiện bắt buộc với lựa chọn người chơi.", "Trả kết quả đúng, chưa đủ căn cứ hoặc sai, kèm lý do dễ hiểu.", "Lưu lượt buộc tội để trình diễn; mô hình có thể diễn đạt phản hồi nhưng không được chấm điểm."],
        outcome: "Lời thoại có thể ứng biến; sự thật vụ án và kết quả chấm điểm thì không.",
      },
    ],
    verdictTitle: "Tách lời thoại khỏi quyền chấm điểm.",
    verdictBody:
      "Python xác minh nghi phạm, các mã bằng chứng và dữ kiện bắt buộc. Mô hình có thể viết câu phản hồi, nhưng không được quyền phán ai là thủ phạm.",
    planEyebrow: "05 / LỘ TRÌNH PHÁT TRIỂN",
    planTitle: "Ba tuần, một vụ án có thể trình diễn.",
    planLead:
      "Tuần đầu dựng bản chơi từ đầu đến cuối; tuần hai khóa chặt luật và kiểm thử; tuần cuối đo kết quả thật rồi chuẩn bị bảo vệ.",
    weeks: [
      {
        week: "TUẦN 01",
        title: "Chốt vụ án",
        range: "Ngày 1–5",
        tasks: ["Chốt thủ phạm, cách gây án, timeline và điều kiện chứng minh", "Viết hồ sơ 3 nghi phạm: động cơ, ngoại phạm, bí mật, điều được biết", "Tạo JSON cho vụ án, dữ kiện, manh mối và lời khai mẫu; kiểm tra mọi ID", "Dựng Streamlit: chọn nghi phạm, khung chat, sổ tay manh mối", "Kết nối một LLM, tách lịch sử theo nghi phạm và chạy thử từ đầu đến cuối"],
        deliverable: "Bản demo thẩm vấn chạy được từ đầu đến cuối",
      },
      {
        week: "TUẦN 02",
        title: "Khóa chặt luật chơi",
        range: "Ngày 6–10",
        tasks: ["Lưu ID manh mối đã mở và lời khai của từng nghi phạm", "Viết luật đối chiếu bằng chứng và dòng thời gian; không nhờ AI tự đoán mâu thuẫn", "Làm màn hình buộc tội, kiểm tra ID và chấm điểm bằng Python", "Thử dữ liệu sai, câu quá dài, hết giờ, giới hạn API, phản hồi rỗng hoặc sai cấu trúc", "Chạy 20–30 câu hỏi hồi quy; đo độ nhất quán, dữ kiện bị lộ, thời gian và chi phí"],
        deliverable: "MVP chơi được, có bằng chứng và kết luận xác định",
      },
      {
        week: "TUẦN 03",
        title: "Chứng minh kết quả",
        range: "Ngày 11–15",
        tasks: ["Làm rõ trạng thái đã tìm/chưa tìm, phản hồi và lỗi trên giao diện", "Sửa lỗi nhất quán ảnh hưởng đến diễn tiến vụ án", "Chạy lại test, ghi số liệu thực tế và lưu ví dụ lỗi điển hình", "Viết báo cáo: kiến trúc, kiểm thử, giới hạn và riêng tư dữ liệu", "Tập demo 7–9 phút; làm sạch hướng dẫn cài đặt và kiểm tra máy dự phòng"],
        deliverable: "Bản demo ổn định, báo cáo, slide và hướng dẫn chạy lại",
      },
    ],
    testEyebrow: "06 / TIÊU CHUẨN CHẤT LƯỢNG",
    testTitle: "Kiểm thử đúng những chỗ có thể làm hỏng vụ án.",
    testLead:
      "Đây là các chỉ số cần đo, không phải kết quả dựng sẵn. Chỉ đưa số liệu vào báo cáo sau khi thực sự chạy bộ test.",
    metrics: [
      ["Độ nhất quán dữ kiện", "Tỷ lệ câu trả lời không trái với sự thật đã biên soạn"],
      ["Chi tiết bị bịa thêm", "Có tự thêm người, nơi chốn, thời gian hay đồ vật không?"],
      ["Giữ kín thông tin", "Nghi phạm có chỉ tiết lộ điều mình được phép biết không?"],
      ["Độ chính xác manh mối", "Lời khai có được gắn với đúng bằng chứng không?"],
      ["Luật buộc tội", "Các ca đúng/sai có được Python chấm chính xác không?"],
      ["Thời gian + chi phí", "Mỗi lượt hỏi mất bao lâu và tốn khoảng bao nhiêu?"],
    ],
    coverageTitle: "Bộ câu hỏi hồi quy",
    coverageBody: "Soạn 20–30 câu hỏi cố định, gồm các tình huống:",
    coverageItems: ["Hỏi thông tin thường và hỏi lại theo cách khác", "Hỏi chuyện nghi phạm không biết hoặc muốn giấu", "Gài giả định sai, dẫn dắt hoặc đánh lừa AI", "Đưa bằng chứng ra đối chất", "Thử ép mô hình bỏ qua luật nhập vai", "Xúi AI bịa thêm người hoặc sự kiện"],
    acceptanceTitle: "Những gì cần có trước buổi demo",
    acceptance: [
      "Người chơi có thể hỏi bằng ngôn ngữ tự nhiên.",
      "Ba nghi phạm có hiểu biết khác nhau, có giới hạn.",
      "Có thể tìm thấy và xem lại bằng chứng.",
      "Mâu thuẫn có căn cứ dẫn về bằng chứng.",
      "Kết luận nêu manh mối và được Python chấm.",
      "Kiểm thử cả kết quả đúng lẫn sai.",
      "Lỗi API được xử lý mà ứng dụng không sập.",
      "Cài đặt chạy được; giới hạn được trình bày trung thực.",
    ],
    risksEyebrow: "07 / TÌNH HUỐNG LỖI",
    risksTitle: "Thiết kế để xử lý điều có thể sai.",
    risks: [
      ["Lời khai thay đổi", "Lưu mã lời khai, hội thoại gần đây và đối chiếu với dữ kiện cố định."],
      ["Lộ bí mật quá sớm", "Giới hạn ngữ cảnh từng nghi phạm và kiểm thử việc tiết lộ."],
      ["Chèn chỉ dẫn độc hại (prompt injection)", "Coi câu chữ người chơi là dữ liệu không đáng tin và kiểm tra đầu ra; không hứa hệ thống miễn nhiễm."],
      ["API ngừng hoạt động hoặc tốn kém", "Giới hạn thời gian chờ, số lần thử, độ dài prompt và số lượt gọi."],
      ["Kết luận thành trò đoán", "Yêu cầu bằng chứng và giải thích nguyên nhân, không chỉ nêu tên."],
      ["Quá phức tạp", "Giữ một vụ án, JSON, một mô hình và không dùng vector DB."],
    ],
    demoEyebrow: "TRÌNH DIỄN / 7–9 PHÚT",
    demoTitle: "Cho thấy suy luận, không chỉ hội thoại.",
    demoSteps: ["Giới thiệu vụ án và mục tiêu", "So sánh ba nghi phạm", "Đặt câu hỏi tự do chưa viết sẵn", "Tìm manh mối và đối chất", "Lần theo mâu thuẫn có chứng cứ", "Kết luận dựa trên manh mối", "Giải thích kết quả xác định và giới hạn kiểm thử thực tế"],
    footer: "Một cuộc điều tra có giới hạn · Được xây dựng để kiểm thử, không chỉ dựa vào prompt.",
    sourceNote: "Tóm lược theo tài liệu kiến trúc được cung cấp · Ví dụ trong tài liệu chỉ mang tính minh họa.",
  },
} as const;

const icons = [Database, Users, FileJson, Network, Fingerprint, GitBranch, ClipboardCheck];
const sidebarIcons = [Home, PackageCheck, Network, Database, MessageSquare, GitBranch, ClipboardCheck, CircleAlert];
const mobileIcons = [Home, FolderOpen, MessageSquare, ClipboardList];
const mobileSectionIds = ["overview", "case-data", "turn-flow", "build-plan"];
const sectionIds = ["overview", "stack", "architecture", "case-data", "turn-flow", "build-plan", "quality", "risks"];
const castPortraits = [
  "/death-note/portrait-01.png",
  "/death-note/portrait-02.png",
  "/death-note/portrait-03.png",
  "/death-note/portrait-04.png",
  "/death-note/portrait-05.png",
  "/death-note/portrait-06.png",
  "/death-note/portrait-07.png",
  "/death-note/unknown-profile.png",
];

function SectionReveal({
  children,
  reduceMotion,
}: {
  children: ReactElement;
  reduceMotion: boolean;
}) {
  return (
    <Fade
      asChild
      inView
      inViewOnce
      initialOpacity={reduceMotion ? 1 : 0.2}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Fade>
  );
}

export default function CasefileDashboard() {
  return (
    <AnimatedSidebar.Provider>
      <CasefileDashboardContent />
    </AnimatedSidebar.Provider>
  );
}

function CasefileDashboardContent() {
  const [language, setLanguage] = useState<Language>("en");
  const [preferencesReady, setPreferencesReady] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const sidebar = AnimatedSidebar.useSidebar();
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = prefersReducedMotion ?? false;
  const t = content[language];

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const storedLanguage = window.localStorage.getItem("casefile-language");
        if (storedLanguage === "en" || storedLanguage === "vi") setLanguage(storedLanguage);
      } catch (error) {
        console.error("Unable to load dashboard preferences.", error);
      }
      setPreferencesReady(true);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!preferencesReady) return;
    document.documentElement.lang = language;
    try {
      window.localStorage.setItem("casefile-language", language);
    } catch (error) {
      console.error("Unable to save dashboard preferences.", error);
    }
  }, [language, preferencesReady]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top);
        if (visibleSections[0]) setActiveSection(visibleSections[0].target.id);
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: 0 },
    );
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
      block: "start",
    });
  };

  return (
    <div className="dashboard">
      <a className="skip-link" href="#overview">
        {language === "en" ? "Skip to overview" : "Đến phần tổng quan"}
      </a>

      <header className="topbar">
        <a className="wordmark" href="#overview" aria-label={t.product}>
          <span className="wordmark-symbol" aria-hidden="true">C</span>
          <span>{t.product}</span>
        </a>
        <div className="topbar-end">
          <span className="language-label">{t.language}</span>
          <div className="language-picker" role="group" aria-label={t.language}>
            <button
              className={language === "en" ? "language-choice is-selected" : "language-choice"}
              type="button"
              aria-pressed={language === "en"}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
            <button
              className={language === "vi" ? "language-choice is-selected" : "language-choice"}
              type="button"
              aria-pressed={language === "vi"}
              onClick={() => setLanguage("vi")}
            >
              VI
            </button>
          </div>
          <a
            className="github-profile-link"
            href="https://github.com/tdk211108"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            title="GitHub profile"
          >
            <Image src="/github-mark.svg" alt="" width={21} height={21} />
          </a>
        </div>
      </header>

      <div
        className="workspace"
        data-sidebar-state={sidebar.state}
        data-collapsible={sidebar.open ? "none" : "icon"}
      >
        <AnimatedSidebar.Container className="sidebar-container">
          <AnimatedSidebar.Highlight className="sidebar-highlight">
            <aside className="sidebar">
              <div className="sidebar-heading">
                <p className="sidebar-kicker">{t.overview}</p>
                <button
                  className="sidebar-toggle"
                  type="button"
                  aria-label={sidebar.open
                    ? (language === "en" ? "Collapse sidebar" : "Thu gọn thanh bên")
                    : (language === "en" ? "Expand sidebar" : "Mở rộng thanh bên")}
                  onClick={sidebar.toggleSidebar}
                >
                  <AnimatedSidebar.TriggerIcon
                    open={<PanelLeftClose size={17} />}
                    closed={<PanelLeftOpen size={17} />}
                    aria-hidden="true"
                  />
                </button>
              </div>
              <nav className="side-nav" aria-label={t.overview}>
                {t.nav.map((label, index) => {
                  const Icon = sidebarIcons[index];
                  return (
                    <a
                      key={label}
                      href={`#${sectionIds[index]}`}
                      aria-label={label}
                      title={label}
                      data-sidebar="menu-button"
                      className={activeSection === sectionIds[index] ? "side-link is-current" : "side-link"}
                      aria-current={activeSection === sectionIds[index] ? "location" : undefined}
                      onClick={(event) => {
                        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                        event.preventDefault();
                        setActiveSection(sectionIds[index]);
                        scrollTo(sectionIds[index]);
                      }}
                    >
                      <Icon size={17} strokeWidth={1.7} aria-hidden="true" />
                      <span className="side-link-label">{label}</span>
                    </a>
                  );
                })}
              </nav>
              <div className="sidebar-bottom">
                <span className="sidebar-bottom-icon"><Workflow size={15} /></span>
                <span className="sidebar-bottom-label">CASEFILE AI<br /><span className="sidebar-bottom-sub">INTERACTIVE DETECTIVE</span></span>
              </div>
            </aside>
          </AnimatedSidebar.Highlight>
        </AnimatedSidebar.Container>

        <PageTransition pageKey={language} effect="fade" className="dashboard-page-transition">
        <main id="overview" className="main-content">
          <Fade asChild inView inViewOnce initialOpacity={reduceMotion ? 1 : 0.25}>
            <section className="hero-section" aria-labelledby="hero-title">
              <GlyphBackground
                className="hero-glyph-background"
                glowColor="#d13b46"
                shapeColor="#f8f4f1"
                fontSize={11}
                interactive
                aria-hidden="true"
              />
              <div className="hero-copy">
                <div className="case-meta">
                  <span className="case-seal" aria-hidden="true"><Fingerprint size={22} /></span>
                  <div className="case-meta-copy">
                    <span className="case-tag">{t.caseTag}</span>
                  </div>
                  <span className="case-status"><i aria-hidden="true" />{t.caseState}</span>
                </div>
                <p className="eyebrow"><span className="eyebrow-line" />{t.eyebrow}</p>
                <h1 id="hero-title" aria-label={t.title}>
                  {t.title.match(/\s+|\S+/g)?.map((part, index) =>
                    /^\s+$/.test(part) ? part : (
                      <ShimmeringText
                        key={`${part}-${index}`}
                        text={part}
                        duration={1.8}
                        color="#fffaf7"
                        shimmeringColor="#ff858d"
                      />
                    ),
                  )}
                </h1>
                <p className="hero-intro">{t.intro}</p>
              </div>
              <div className="overview-stats" aria-label={t.overview}>
                <p className="facts-heading">{t.factsLabel}</p>
                <Fades
                  asChild
                  inView
                  inViewOnce
                  holdDelay={reduceMotion ? 0 : 70}
                  initialOpacity={reduceMotion ? 1 : 0.3}
                >
                  {t.facts.map((fact) => (
                    <div className="stat-row" key={fact.label}>
                      <span className="stat-value">{fact.value}</span>
                      <span className="stat-label">{fact.label}</span>
                    </div>
                  ))}
                </Fades>
                <Image
                  className="reaper-sketch"
                  src="/death-note/reaper-500.png"
                  alt=""
                  width={500}
                  height={500}
                  loading="eager"
                  unoptimized
                  aria-hidden="true"
                />
              </div>
            </section>
          </Fade>

          <SectionReveal reduceMotion={reduceMotion}>
          <section className="contract-section" aria-labelledby="contract-title">
            <div className="contract-heading">
              <p className="section-label">{t.principleLabel}</p>
              <h2 id="contract-title">{t.principleTitle}</h2>
              <p>{t.principleBody}</p>
            </div>
            <div className="contract-layers">
              <Fades
                asChild
                inView
                inViewOnce
                holdDelay={reduceMotion ? 0 : 65}
                initialOpacity={reduceMotion ? 1 : 0.25}
              >
                {t.layers.map((layer, index) => (
                  <div className={`contract-layer layer-${index + 1}`} key={layer.title}>
                    <div>
                      <h3>{layer.title}</h3>
                      <p>{layer.detail}</p>
                    </div>
                  </div>
                ))}
              </Fades>
            </div>
          </section>
          </SectionReveal>

          <SectionReveal reduceMotion={reduceMotion}>
          <section className="scope-section content-section" aria-labelledby="scope-title">
            <div className="section-heading">
              <div>
                <p className="section-label">{t.overview}</p>
                <h2 id="scope-title">{t.scopeTitle}</h2>
                <p className="section-lead">{t.scopeLead}</p>
              </div>
            </div>
            <div className="scope-columns">
              {t.scope.map((group, index) => (
                <Card className={`scope-column${index === 0 ? " in-scope" : ""}`} key={group.heading}>
                  <CardHeader>
                    <Badge variant={index === 0 ? "default" : "outline"}>
                      {index === 0
                        ? (language === "en" ? "MVP SCOPE" : "TRONG MVP")
                        : (language === "en" ? "LATER" : "ĐỂ SAU")}
                    </Badge>
                    <CardTitle>{group.heading}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul>
                      {group.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          </SectionReveal>

          <SectionReveal reduceMotion={reduceMotion}>
          <section id="stack" className="content-section anchor-section stack-section" aria-labelledby="stack-title">
            <div className="section-heading">
              <div>
                <p className="section-label">{t.stackEyebrow}</p>
                <h2 id="stack-title">{t.stackTitle}</h2>
                <p className="section-lead">{t.stackLead}</p>
              </div>
              <PackageCheck className="heading-mark" size={19} aria-hidden="true" />
            </div>
            <div className="stack-cards">
              {t.stackRows.map(([layer, recommendation, rationale], index) => {
                const Icon = icons[index % icons.length];
                return (
                  <Card className="stack-card" key={layer}>
                    <CardHeader>
                      <div className="stack-card-title">
                        <span className="stack-card-icon"><Icon size={18} aria-hidden="true" /></span>
                        <CardTitle>{layer}</CardTitle>
                      </div>
                      <Badge variant="outline">{String(index + 1).padStart(2, "0")}</Badge>
                    </CardHeader>
                    <CardContent>
                      <strong>{recommendation}</strong>
                      <p>{rationale}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="stack-footer">
              <span className="dashboard-note"><Workflow size={13} aria-hidden="true" />{t.dashboardNote}</span>
              <span className="optional-note">{t.stackFootnote}</span>
            </div>
          </section>
          </SectionReveal>

          <SectionReveal reduceMotion={reduceMotion}>
          <section id="architecture" className="content-section anchor-section" aria-labelledby="architecture-title">
            <div className="section-heading">
              <div>
                <p className="section-label">{t.architectureEyebrow}</p>
                <h2 id="architecture-title">{t.architectureTitle}</h2>
                <p className="section-lead">{t.architectureLead}</p>
              </div>
              <Network className="heading-mark" size={19} aria-hidden="true" />
            </div>
            <div className="architecture-panel">
              <p className="diagram-caption">{t.appLayer}</p>
              <div className="main-flow" tabIndex={0} aria-label={t.architectureTitle}>
                <div className="flow-node">
                  <span className="node-icon"><Workflow size={16} /></span>
                  <strong>{t.browser}</strong>
                </div>
                <ArrowRight className="flow-arrow" size={17} aria-hidden="true" />
                <div className="flow-node">
                  <span className="node-icon"><Network size={16} /></span>
                  <strong>{t.streamlit}</strong>
                </div>
                <ArrowRight className="flow-arrow" size={17} aria-hidden="true" />
                <div className="flow-node node-primary">
                  <span className="node-icon"><Workflow size={16} /></span>
                  <strong>{t.services}</strong>
                  <span>{t.servicesSub}</span>
                </div>
                <ArrowRight className="flow-arrow" size={17} aria-hidden="true" />
                <div className="flow-node node-llm">
                  <span className="node-icon"><Braces size={16} /></span>
                  <strong>{t.llm}</strong>
                  <span>{t.llmSub}</span>
                </div>
              </div>
              <div className="branch-grid">
                <div className="branch-rule branch-rule-left" aria-hidden="true" />
                <div className="branch-node branch-source">
                  <Database size={16} aria-hidden="true" />
                  <div><strong>{t.repository}</strong><span>{t.repositorySub}</span></div>
                </div>
                <div className="branch-node branch-truth">
                  <LockKeyhole size={16} aria-hidden="true" />
                  <div><strong>{t.truth}</strong><span>{t.truthSub}</span></div>
                </div>
                <div className="branch-node branch-rules">
                  <Scale size={16} aria-hidden="true" />
                  <div><strong>{t.rules}</strong><span>{t.rulesSub}</span></div>
                </div>
              </div>
              <div className="diagram-legend">
                <span><span className="legend-dot model-dot" />{t.modelProduces}</span>
                <span><span className="legend-dot rules-dot" />{t.codeDecides}</span>
              </div>
            </div>
            <div className="boundary-note">
              <div className="boundary-symbol"><ShieldCheck size={19} /></div>
              <div>
                <h3>{t.boundaryTitle}</h3>
                <p>{t.boundaryBody}</p>
                <span className="boundary-footnote">{t.modelNever}</span>
              </div>
            </div>
          </section>
          </SectionReveal>

          <SectionReveal reduceMotion={reduceMotion}>
          <section id="case-data" className="content-section anchor-section" aria-labelledby="data-title">
            <div className="section-heading">
              <div>
                <p className="section-label">{t.dataEyebrow}</p>
                <h2 id="data-title">{t.dataTitle}</h2>
                <p className="section-lead">{t.dataLead}</p>
              </div>
              <FileJson className="heading-mark" size={19} aria-hidden="true" />
            </div>
            <div className="entity-cards">
              {t.entities.map(([name, detail, relation], index) => {
                const Icon = icons[index];
                return (
                  <Card className="entity-card" key={name}>
                    <CardHeader>
                      <span className="entity-card-icon"><Icon size={18} aria-hidden="true" /></span>
                      <CardTitle>{name}</CardTitle>
                      <Badge variant="outline">{String(index + 1).padStart(2, "0")}</Badge>
                    </CardHeader>
                    <CardContent>
                      <span className="entity-field-label">{t.entityHeaders[1]}</span>
                      <p>{detail}</p>
                      <span className="entity-field-label">{t.entityHeaders[2]}</span>
                      <div className="entity-relations">
                        {relation.split(" · ").map((part) => <Badge variant="secondary" key={part}>{part}</Badge>)}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="repository-plan">
              <div className="repository-heading">
                <div>
                  <p className="section-label">CASEFILE-AI / PROJECT TREE</p>
                  <h3>{t.repoTitle}</h3>
                  <p>{t.repoLead}</p>
                </div>
                <Braces size={17} aria-hidden="true" />
              </div>
              <Accordion className="repository-groups" defaultValue={["project-data"]}>
                {[
                  { value: "entry-point", label: language === "en" ? "Entry point" : "Điểm khởi chạy", files: t.repoFiles.slice(0, 1) },
                  { value: "project-data", label: language === "en" ? "Authored case data" : "Dữ liệu vụ án", files: t.repoFiles.slice(1, 2) },
                  { value: "game-services", label: language === "en" ? "Game services" : "Dịch vụ trò chơi", files: t.repoFiles.slice(2, 9) },
                  { value: "quality-tests", label: language === "en" ? "Quality & tests" : "Chất lượng & kiểm thử", files: t.repoFiles.slice(9) },
                ].map((group) => (
                  <AccordionItem value={group.value} key={group.value}>
                    <AccordionTrigger>
                      <span className="repository-group-title">{group.label}</span>
                      <Badge variant="secondary">{String(group.files.length).padStart(2, "0")}</Badge>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="repository-files">
                        {group.files.map(([file, responsibility]) => (
                          <div className="repository-file" key={file}>
                            <code>{file}</code>
                            <span>{responsibility}</span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="knowledge-model">
              <div className="knowledge-heading">
                <Search01 size={19} animateOnView="find" aria-hidden="true" />
                <h3>{language === "en" ? "Give each character a boundary" : "Đặt ranh giới kiến thức cho từng nhân vật"}</h3>
              </div>
              <div className="knowledge-grid">
                {t.boundaryColumns.map((column, index) => (
                  <Card className={`knowledge-column knowledge-${index + 1}`} key={column.title}>
                    <CardHeader>
                      <Badge variant={index === 0 ? "default" : "outline"}>{column.title}</Badge>
                    </CardHeader>
                    <CardContent><p>{column.detail}</p></CardContent>
                  </Card>
                ))}
              </div>
              <div className="cast-reference">
                <div className="cast-reference-heading">
                  <div>
                    <p className="cast-reference-kicker">
                      {language === "en" ? "CASE GALLERY / SOURCE ASSETS" : "PHÒNG HỒ SƠ / TÀI NGUYÊN GỐC"}
                    </p>
                    <h4>{language === "en" ? "Character portrait references" : "Ảnh tham chiếu nhân vật"}</h4>
                  </div>
                  <Image
                    className="cast-wing-mark"
                    src="/death-note/wing-mark-500.png"
                    alt=""
                    width={500}
                    height={500}
                    unoptimized
                    aria-hidden="true"
                  />
                </div>
                <p className="cast-reference-note">
                  {language === "en"
                    ? "Supplied Figma portraits are visual references only; they are not assigned case facts or suspect identities."
                    : "Ảnh chân dung từ Figma chỉ dùng làm tham chiếu; chưa gắn với danh tính nghi phạm hay dữ kiện vụ án."}
                </p>
                <div className="cast-gallery">
                  {castPortraits.map((src, index) => (
                    <figure className="cast-photo" key={src}>
                      <div className="cast-photo-image">
                        <Image
                          src={src}
                          alt={
                            language === "en"
                              ? `Character portrait reference ${index + 1}`
                              : `Ảnh tham chiếu nhân vật ${index + 1}`
                          }
                          width={512}
                          height={512}
                          sizes="(max-width: 760px) 22vw, 10vw"
                          unoptimized
                        />
                      </div>
                      <figcaption>
                        {index === castPortraits.length - 1
                          ? language === "en" ? "UNIDENTIFIED" : "CHƯA NHẬN DIỆN"
                          : `${language === "en" ? "PROFILE" : "HỒ SƠ"} 0${index + 1}`}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
            <div className="session-schema">
              <div className="schema-heading">
                <span className="schema-kicker">{t.schemaEyebrow}</span>
                <Braces size={17} aria-hidden="true" />
              </div>
              <div className="schema-lines">
                {t.schemaRows.map(([key, value], index) => (
                  <Card className="schema-line" key={key}>
                    <Badge variant="outline">{String(index + 1).padStart(2, "0")}</Badge>
                    <code>{key}</code>
                    <span>{value}</span>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          </SectionReveal>

          <SectionReveal reduceMotion={reduceMotion}>
          <section id="turn-flow" className="content-section anchor-section" aria-labelledby="flow-title">
            <div className="section-heading">
              <div>
                <p className="section-label">{t.flowEyebrow}</p>
                <h2 id="flow-title">{t.flowTitle}</h2>
                <p className="section-lead">{t.flowLead}</p>
              </div>
              <GitBranch className="heading-mark" size={19} aria-hidden="true" />
            </div>
            <ol className="turn-flow">
              {t.steps.map(([number, title, detail], index) => (
                <li className="turn-step" key={number}>
                  <span className="turn-number">{number}</span>
                  <div className="turn-step-copy"><h3>{title}</h3><p>{detail}</p></div>
                  {index < t.steps.length - 1 && <ChevronRight className="turn-chevron" size={16} aria-hidden="true" />}
                </li>
              ))}
            </ol>
            <p className="flow-note"><ArrowDown size={15} aria-hidden="true" /><span>{t.flowNote}</span></p>
            <div className="workflow-cases">
              <Fades
                asChild
                inView
                inViewOnce
                holdDelay={reduceMotion ? 0 : 85}
                initialOpacity={reduceMotion ? 1 : 0.2}
              >
                {t.workflows.map((workflow, index) => (
                  <article className={`workflow-case workflow-case-${index + 1}`} key={workflow.label}>
                    <div className="workflow-case-heading">
                      <h3>{workflow.title}</h3>
                    </div>
                    <ol>
                      {workflow.steps.map((step) => (
                        <li key={step}>
                          <p>{step}</p>
                        </li>
                      ))}
                    </ol>
                    <p className="workflow-outcome">{workflow.outcome}</p>
                  </article>
                ))}
              </Fades>
            </div>
            <div className="verdict-panel">
              <div className="verdict-icon"><Scale size={19} aria-hidden="true" /></div>
              <div><p className="section-label">{language === "en" ? "FINAL ACCUSATION" : "KẾT LUẬN CUỐI"}</p><h3>{t.verdictTitle}</h3><p>{t.verdictBody}</p></div>
              <span className="python-mark">PY</span>
            </div>
          </section>
          </SectionReveal>

          <SectionReveal reduceMotion={reduceMotion}>
          <section id="build-plan" className="content-section anchor-section" aria-labelledby="plan-title">
            <div className="section-heading">
              <div>
                <p className="section-label">{t.planEyebrow}</p>
                <h2 id="plan-title">{t.planTitle}</h2>
                <p className="section-lead">{t.planLead}</p>
              </div>
              <span className="three-week-mark">03<span>W</span></span>
            </div>
            <div className="week-grid">
              <Fades
                asChild
                inView
                inViewOnce
                holdDelay={reduceMotion ? 0 : 90}
                initialOpacity={reduceMotion ? 1 : 0.2}
              >
                {t.weeks.map((week) => (
                  <article className="week-column" key={week.week}>
                    <div className="week-topline"><span>{week.week}</span><span>{week.range}</span></div>
                    <h3>{week.title}</h3>
                    <ol>{week.tasks.map((task) => <li key={task}>{task}</li>)}</ol>
                    <div className="deliverable"><Check size={14} aria-hidden="true" /><span>{week.deliverable}</span></div>
                  </article>
                ))}
              </Fades>
            </div>
            <div className="team-note">
              <Users size={16} aria-hidden="true" />
              <span>{language === "en" ? "Suggested 4–5 person split" : "Gợi ý phân chia nhóm 4–5 người"}</span>
              <span>{language === "en" ? "Story & data" : "Cốt truyện & dữ liệu"}</span><i />
              <span>{language === "en" ? "LLM & prompts" : "LLM & prompt"}</span><i />
              <span>{language === "en" ? "Core logic" : "Logic cốt lõi"}</span><i />
              <span>UI</span><i />
              <span>{language === "en" ? "QA & report" : "QA & báo cáo"}</span>
            </div>
          </section>
          </SectionReveal>

          <SectionReveal reduceMotion={reduceMotion}>
          <section id="quality" className="content-section anchor-section" aria-labelledby="quality-title">
            <div className="section-heading">
              <div>
                <p className="section-label">{t.testEyebrow}</p>
                <h2 id="quality-title">{t.testTitle}</h2>
                <p className="section-lead">{t.testLead}</p>
              </div>
              <ClipboardCheck className="heading-mark" size={19} aria-hidden="true" />
            </div>
            <div className="quality-layout">
              <div className="metric-list">
                {t.metrics.map(([label, detail], index) => {
                  const MetricIcon = metricIcons[index];
                  return (
                    <Card className="metric-card" key={label}>
                      <CardHeader>
                        <span className="metric-icon"><MetricIcon size={17} aria-hidden="true" /></span>
                        <CardTitle>{label}</CardTitle>
                      </CardHeader>
                      <CardContent><p>{detail}</p></CardContent>
                    </Card>
                  );
                })}
              </div>
              <aside className="coverage-panel">
                <div className="coverage-header"><Braces size={16} /><h3>{t.coverageTitle}</h3><span className="coverage-range">20–30</span></div>
                <p>{t.coverageBody}</p>
                <ul>{t.coverageItems.map((item) => <li key={item}><span aria-hidden="true" />{item}</li>)}</ul>
              </aside>
            </div>
            <div className="acceptance-block">
              <div className="acceptance-heading">
                <ShieldCheck size={17} aria-hidden="true" />
                <h3>{t.acceptanceTitle}</h3>
                <span>{language === "en" ? "MVP EXIT CRITERIA" : "TIÊU CHÍ HOÀN THÀNH MVP"}</span>
              </div>
              <ul className="acceptance-list">
                {t.acceptance.map((item) => <li key={item}><span className="empty-check" aria-hidden="true" />{item}</li>)}
              </ul>
            </div>
          </section>
          </SectionReveal>

          <SectionReveal reduceMotion={reduceMotion}>
          <section id="risks" className="content-section anchor-section" aria-labelledby="risk-title">
            <div className="section-heading">
              <div>
                <p className="section-label">{t.risksEyebrow}</p>
                <h2 id="risk-title">{t.risksTitle}</h2>
              </div>
              <CircleAlert className="heading-mark" size={19} aria-hidden="true" />
            </div>
            <div className="risk-list">
              {t.risks.map(([risk, mitigation]) => (
                <div className="risk-row" key={risk}>
                  <CircleAlert size={17} aria-hidden="true" />
                  <strong>{risk}</strong>
                  <span>{mitigation}</span>
                </div>
              ))}
            </div>
          </section>
          </SectionReveal>

          <SectionReveal reduceMotion={reduceMotion}>
          <section className="demo-section" aria-labelledby="demo-title">
            <div className="demo-heading">
              <p className="section-label">{t.demoEyebrow}</p>
              <h2 id="demo-title">{t.demoTitle}</h2>
            </div>
            <ol className="demo-steps">
              {t.demoSteps.map((step, index) => (
                <li key={step}>
                  <Badge variant="outline">{String(index + 1).padStart(2, "0")}</Badge>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>
          </SectionReveal>

          <footer className="page-footer">
            <span>{t.footer}</span>
            <span className="footer-source">{t.sourceNote}</span>
            <button type="button" className="back-to-top" onClick={() => scrollTo("overview")}>
              {language === "en" ? "BACK TO TOP" : "LÊN ĐẦU TRANG"}
            </button>
          </footer>
        </main>
        </PageTransition>
      </div>
      <nav className="mobile-game-nav" aria-label={language === "en" ? "Game sections" : "Các mục trò chơi"}>
          {t.mobileNav.map((label, index) => {
            const Icon = mobileIcons[index];
            const sectionId = mobileSectionIds[index];
            return (
              <a
                key={sectionId}
                href={`#${sectionId}`}
                className={activeSection === sectionId ? "mobile-game-link is-current" : "mobile-game-link"}
                aria-current={activeSection === sectionId ? "location" : undefined}
                onClick={(event) => {
                  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                  event.preventDefault();
                  setActiveSection(sectionId);
                  scrollTo(sectionId);
                }}
              >
                <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
                <span>{label}</span>
              </a>
            );
          })}
      </nav>
    </div>
  );
}
