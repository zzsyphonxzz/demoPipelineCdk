#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { DemopipelineStack } from '../lib/demopipeline-stack';

const app = new cdk.App();
new DemopipelineStack(app, 'DemopipelineStack', {
  env: { account: '523669476434', region: 'us-east-1' },
});