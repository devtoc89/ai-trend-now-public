import { crawlArxiv } from "#layer/crawl/arxiv/arxiv.service.ts";

test("arxiv parser test", async () => {
  const response = await crawlArxiv({ from: "20241101", to: "20241120" });
  expect(JSON.parse(JSON.stringify(response))).toEqual({
    "?xml": { version: "1.0", encoding: "UTF-8" },
    feed: {
      link: {
        href: "http://arxiv.org/api/query?search_query%3Dall%3AArtificial%20Intelligence%20AND%20submittedDate%3A%5B20241101%20TO%2020241120%5D%26id_list%3D%26start%3D0%26max_results%3D5",
        rel: "self",
        type: "application/atom+xml",
      },
      title: {
        "#text":
          "ArXiv Query: search_query=all:Artificial Intelligence AND submittedDate:[20241101 TO 20241120]&id_list=&start=0&max_results=5",
        type: "html",
      },
      id: "http://arxiv.org/api/r4YMsJItgux1CP7fTmZwOLkELM4",
      updated: "2024-11-20T00:00:00-05:00",
      "opensearch:totalResults": { "#text": 1849, "xmlns:opensearch": "http://a9.com/-/spec/opensearch/1.1/" },
      "opensearch:startIndex": { "#text": 0, "xmlns:opensearch": "http://a9.com/-/spec/opensearch/1.1/" },
      "opensearch:itemsPerPage": { "#text": 5, "xmlns:opensearch": "http://a9.com/-/spec/opensearch/1.1/" },
      entry: [
        {
          id: "http://arxiv.org/abs/2411.12736v1",
          updated: "2024-11-19T18:58:03Z",
          published: "2024-11-19T18:58:03Z",
          title: "ACING: Actor-Critic for Instruction Learning in Black-Box Large Language\n  Models",
          summary:
            "The effectiveness of Large Language Models (LLMs) in solving tasks vastly\ndepends on the quality of the instructions, which often require fine-tuning\nthrough extensive human effort. This highlights the need for automated\ninstruction optimization; however, this optimization is particularly\nchallenging when dealing with black-box LLMs, where model parameters and\ngradients remain inaccessible. We propose ACING, a task-specific prompt\noptimization approach framed as a stateless continuous-action Reinforcement\nLearning (RL) problem, known as the continuum bandit setting. ACING leverages\nan actor-critic-based method to optimize prompts, learning from\nnon-differentiable reward signals. We validate ACING by optimizing prompts for\nChatGPT on 30 instruction-based tasks. ACING consistently outperforms baseline\nmethods, achieving a median score improvement of 10 percentage points.\nFurthermore, ACING not only recovers but also surpasses human-crafted expert\ninstructions, achieving up to a 39 percentage point improvement against human\nbenchmarks.",
          author: [{ name: "Salma Kharrat" }, { name: "Fares Fourati" }, { name: "Marco Canini" }],
          link: [
            { href: "http://arxiv.org/abs/2411.12736v1", rel: "alternate", type: "text/html" },
            { title: "pdf", href: "http://arxiv.org/pdf/2411.12736v1", rel: "related", type: "application/pdf" },
          ],
          "arxiv:primary_category": {
            "xmlns:arxiv": "http://arxiv.org/schemas/atom",
            term: "cs.CL",
            scheme: "http://arxiv.org/schemas/atom",
          },
          category: [
            { term: "cs.CL", scheme: "http://arxiv.org/schemas/atom" },
            { term: "cs.AI", scheme: "http://arxiv.org/schemas/atom" },
            { term: "cs.LG", scheme: "http://arxiv.org/schemas/atom" },
            { term: "cs.SY", scheme: "http://arxiv.org/schemas/atom" },
            { term: "eess.SY", scheme: "http://arxiv.org/schemas/atom" },
            { term: "math.OC", scheme: "http://arxiv.org/schemas/atom" },
          ],
        },
        {
          id: "http://arxiv.org/abs/2411.12732v1",
          updated: "2024-11-19T18:57:01Z",
          published: "2024-11-19T18:57:01Z",
          title: "Benchmarking Positional Encodings for GNNs and Graph Transformers",
          summary:
            "Recent advances in Graph Neural Networks (GNNs) and Graph Transformers (GTs)\nhave been driven by innovations in architectures and Positional Encodings\n(PEs), which are critical for augmenting node features and capturing graph\ntopology. PEs are essential for GTs, where topological information would\notherwise be lost without message-passing. However, PEs are often tested\nalongside novel architectures, making it difficult to isolate their effect on\nestablished models. To address this, we present a comprehensive benchmark of\nPEs in a unified framework that includes both message-passing GNNs and GTs. We\nalso establish theoretical connections between MPNNs and GTs and introduce a\nsparsified GRIT attention mechanism to examine the influence of global\nconnectivity. Our findings demonstrate that previously untested combinations of\nGNN architectures and PEs can outperform existing methods and offer a more\ncomprehensive picture of the state-of-the-art. To support future research and\nexperimentation in our framework, we make the code publicly available.",
          author: [{ name: "Florian Grötschla" }, { name: "Jiaqing Xie" }, { name: "Roger Wattenhofer" }],
          link: [
            { href: "http://arxiv.org/abs/2411.12732v1", rel: "alternate", type: "text/html" },
            { title: "pdf", href: "http://arxiv.org/pdf/2411.12732v1", rel: "related", type: "application/pdf" },
          ],
          "arxiv:primary_category": {
            "xmlns:arxiv": "http://arxiv.org/schemas/atom",
            term: "cs.LG",
            scheme: "http://arxiv.org/schemas/atom",
          },
          category: [
            { term: "cs.LG", scheme: "http://arxiv.org/schemas/atom" },
            { term: "cs.AI", scheme: "http://arxiv.org/schemas/atom" },
          ],
        },
        {
          id: "http://arxiv.org/abs/2411.12724v1",
          updated: "2024-11-19T18:45:16Z",
          published: "2024-11-19T18:45:16Z",
          title: "Heuristic-Free Multi-Teacher Learning",
          summary:
            "We introduce Teacher2Task, a novel framework for multi-teacher learning that\neliminates the need for manual aggregation heuristics. Existing multi-teacher\nmethods typically rely on such heuristics to combine predictions from multiple\nteachers, often resulting in sub-optimal aggregated labels and the propagation\nof aggregation errors. Teacher2Task addresses these limitations by introducing\nteacher-specific input tokens and reformulating the training process. Instead\nof relying on aggregated labels, the framework transforms the training data,\nconsisting of ground truth labels and annotations from N teachers, into N+1\ndistinct tasks: N auxiliary tasks that predict the labeling styles of the N\nindividual teachers, and one primary task that focuses on the ground truth\nlabels. This approach, drawing upon principles from multiple learning\nparadigms, demonstrates strong empirical results across a range of\narchitectures, modalities, and tasks.",
          author: [
            { name: "Huy Thong Nguyen" },
            { name: "En-Hung Chu" },
            { name: "Lenord Melvix" },
            { name: "Jazon Jiao" },
            { name: "Chunglin Wen" },
            { name: "Benjamin Louie" },
          ],
          link: [
            { href: "http://arxiv.org/abs/2411.12724v1", rel: "alternate", type: "text/html" },
            { title: "pdf", href: "http://arxiv.org/pdf/2411.12724v1", rel: "related", type: "application/pdf" },
          ],
          "arxiv:primary_category": {
            "xmlns:arxiv": "http://arxiv.org/schemas/atom",
            term: "cs.LG",
            scheme: "http://arxiv.org/schemas/atom",
          },
          category: [
            { term: "cs.LG", scheme: "http://arxiv.org/schemas/atom" },
            { term: "cs.AI", scheme: "http://arxiv.org/schemas/atom" },
            { term: "cs.CV", scheme: "http://arxiv.org/schemas/atom" },
          ],
        },
        {
          id: "http://arxiv.org/abs/2411.12721v1",
          updated: "2024-11-19T18:39:20Z",
          published: "2024-11-19T18:39:20Z",
          title:
            "An AI-Enabled Side Channel Power Analysis Based Hardware Trojan\n  Detection Method for Securing the Integrated Circuits in Cyber-Physical\n  Systems",
          summary:
            "Cyber-physical systems rely on sensors, communication, and computing, all\npowered by integrated circuits (ICs). ICs are largely susceptible to various\nhardware attacks with malicious intents. One of the stealthiest threats is the\ninsertion of a hardware trojan into the IC, causing the circuit to malfunction\nor leak sensitive information. Due to supply chain vulnerabilities, ICs face\nrisks of trojan insertion during various design and fabrication stages. These\ntrojans typically remain inactive until triggered. Once triggered, trojans can\nseverely compromise system safety and security. This paper presents a\nnon-invasive method for hardware trojan detection based on side-channel power\nanalysis. We utilize the dynamic power measurements for twelve hardware trojans\nfrom IEEE DataPort. Our approach applies to signal processing techniques to\nextract crucial time-domain and frequency-domain features from the power\ntraces, which are then used for trojan detection leveraging Artificial\nIntelligence (AI) models. Comparison with a baseline detection approach\nindicates that our approach achieves higher detection accuracy than the\nbaseline models used on the same side-channel power dataset.",
          author: [
            { name: "Sefatun-Noor Puspa" },
            { name: "Abyad Enan" },
            { name: "Reek Majumdar" },
            { name: "M Sabbir Salek" },
            { name: "Gurcan Comert" },
            { name: "Mashrur Chowdhury" },
          ],
          "arxiv:comment": { "#text": "19 pages, 7 figures", "xmlns:arxiv": "http://arxiv.org/schemas/atom" },
          link: [
            { href: "http://arxiv.org/abs/2411.12721v1", rel: "alternate", type: "text/html" },
            { title: "pdf", href: "http://arxiv.org/pdf/2411.12721v1", rel: "related", type: "application/pdf" },
          ],
          "arxiv:primary_category": {
            "xmlns:arxiv": "http://arxiv.org/schemas/atom",
            term: "cs.CR",
            scheme: "http://arxiv.org/schemas/atom",
          },
          category: { term: "cs.CR", scheme: "http://arxiv.org/schemas/atom" },
        },
        {
          id: "http://arxiv.org/abs/2411.12713v1",
          updated: "2024-11-19T18:27:31Z",
          published: "2024-11-19T18:27:31Z",
          title:
            "CATCH: Complementary Adaptive Token-level Contrastive Decoding to\n  Mitigate Hallucinations in LVLMs",
          summary:
            "Large Vision-Language Model (LVLM) systems have demonstrated impressive\nvision-language reasoning capabilities but suffer from pervasive and severe\nhallucination issues, posing significant risks in critical domains such as\nhealthcare and autonomous systems. Despite previous efforts to mitigate\nhallucinations, a persistent issue remains: visual defect from vision-language\nmisalignment, creating a bottleneck in visual processing capacity. To address\nthis challenge, we develop Complementary Adaptive Token-level Contrastive\nDecoding to Mitigate Hallucinations in LVLMs (CATCH), based on the Information\nBottleneck theory. CATCH introduces Complementary Visual Decoupling (CVD) for\nvisual information separation, Non-Visual Screening (NVS) for hallucination\ndetection, and Adaptive Token-level Contrastive Decoding (ATCD) for\nhallucination mitigation. CATCH addresses issues related to visual defects that\ncause diminished fine-grained feature perception and cumulative hallucinations\nin open-ended scenarios. It is applicable to various visual question-answering\ntasks without requiring any specific data or prior knowledge, and generalizes\nrobustly to new tasks without additional training, opening new possibilities\nfor advancing LVLM in various challenging applications.",
          author: [
            { name: "Zhehan Kan" },
            { name: "Ce Zhang" },
            { name: "Zihan Liao" },
            { name: "Yapeng Tian" },
            { name: "Wenming Yang" },
            { name: "Junyuan Xiao" },
            { name: "Xu Li" },
            { name: "Dongmei Jiang" },
            { name: "Yaowei Wang" },
            { name: "Qingmin Liao" },
          ],
          link: [
            { href: "http://arxiv.org/abs/2411.12713v1", rel: "alternate", type: "text/html" },
            { title: "pdf", href: "http://arxiv.org/pdf/2411.12713v1", rel: "related", type: "application/pdf" },
          ],
          "arxiv:primary_category": {
            "xmlns:arxiv": "http://arxiv.org/schemas/atom",
            term: "cs.CV",
            scheme: "http://arxiv.org/schemas/atom",
          },
          category: [
            { term: "cs.CV", scheme: "http://arxiv.org/schemas/atom" },
            { term: "cs.AI", scheme: "http://arxiv.org/schemas/atom" },
          ],
        },
      ],
      xmlns: "http://www.w3.org/2005/Atom",
    },
  });
});
