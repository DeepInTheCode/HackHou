'''
Created on May 18, 2013

@author: m
'''
import csv
import json

#from itertools import izip

f = open( 'fee-schedule-master-file-fy13_displayFields.csv', 'r' )
reader = csv.reader( f )
keys = ( "Name", "ResponsibleDepartment", "Description", "StatutoryAuthority", "AMOUNT" )
out = []
for value in reader:
    value = iter( value )
    data = {}
    for key in keys:
        data[ key ] = value.next()
    out = [dict(zip(keys, value)) for value in reader]
print json.dumps(out)