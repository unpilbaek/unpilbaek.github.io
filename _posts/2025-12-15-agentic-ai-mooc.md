---
layout: post
title: Agentic AI for Automating Scientific Discovery
date: 2025-12-15
description: A synthesis on how agentic AI can automate parts of scientific discovery, based on a lecture from the Agentic AI MOOC.
tags: agenticai, aiforscience, multiagentsystems, mlaiengineering, mlai
categories:
related_posts: false
---

Having recently completed a PhD in quantum computing, I’ve been actively building fluency in ML/AI engineering as I transition from academic research into industry. This fall I took the [Agentic AI MOOC](https://agenticai-learning.org/f25) led by Prof. Dawn Song, with lectures from researchers and engineers across OpenAI, NVIDIA, Microsoft, Sierra, DeepMind, and Sony AI.

My biggest takeaway is that the center of gravity is shifting from prompting LLMs to engineering agentic systems: models that can plan, reason, use tools, and coordinate actions. One lecture that especially resonated with me as a scientist was [Prof. James Zou’s (Stanford) session](https://www.youtube.com/live/yqPIsTTdUkc?si=F2blHNmwkcQtf158) on using AI agents to automate scientific discovery. Here’s my synthesis of the key ideas:

##### (1) [Virtual Lab](https://www.nature.com/articles/s41586-025-09442-9): agents as a research team

The Virtual Lab shows how specialized agents (domain experts, a PI/project manager, and a critic) can work in parallel, use long-term external memory, and iteratively refine research plans. What stood out to me was the workflow structure to ensure reliability: parallel meetings, intermediate summaries, critique loops, and human review checkpoints to reduce compounding errors.

##### (2) [Paper2Agent](https://arxiv.org/abs/2509.06917): turning papers into executable tools (via MCP)

Paper2Agent reimagines papers as interactive artifacts by wrapping methods/code/data into Model Context Protocol (MCP) servers, so a “paper” becomes something you can query and run. A powerful implication is agent-to-agent collaboration: for example, connecting a method agent and a data agent via an orchestrator chatbot to explore integrations. The lecture highlighted an example where combining an AlphaGenome agent with an ADHD GWAS agent surfaced a candidate signal involving splicing errors associated with ADHD risk, illustrating how cross-paper synthesis can generate testable hypotheses.

##### (3) [Agents4Science](https://agents4science.stanford.edu/): an open conference of papers written with AI co-scientists

Agents4Science experiments with a conference format where AI agents participate as authors and reviewers. A key takeaway is that AI tends to be most effective in data analysis and writing (later stages), and weaker at hypothesis generation and experimental design (earlier stages), reinforcing the continuing need for human judgment, domain context, and experimental validation. The prevalence of reference hallucinations is also a reminder that verification needs to be built into the pipeline.

**Overall**: AI agents amplify scientific productivity when embedded in structured workflows with human oversight. Agents can speed up the loop, but humans still own judgment, creativity, and validation.
