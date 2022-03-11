import numpy as np
from .VCTR import get_input_vectors

def MULTIPLY(**kwargs):
    ''' Takes 2 input vectors, multiplies them, and returns the result '''

    previous_job_results = get_input_vectors(kwargs['previous_job_ids'])

    x = previous_job_results[0]['x0']

    y = np.multiply(
        previous_job_results[0]['y0'], 
        previous_job_results[1]['y0'])

    return {'x0':x, 'y0':y}